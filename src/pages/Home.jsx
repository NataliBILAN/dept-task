import { useState, useEffect } from "react";

import FirstScreen from "../components/FirstScreen/FirstScreen";
import CasePreview from "../components/CasePreview/CasePreview";
import CaseDescription from "../components/CaseDescription/CaseDescription";
import DropDown from "../components/DropDown/DropDown";

import "./Home.scss";
import { transformDataForLayout } from "../helpers/helper";

export default function Home() {
  const [cases, setCases] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedIndustryId, setSelectedIndustryId] = useState(100);

  const pageLimit = 3;
  let descriptionItems = [];

  const industries = [
    {
      id: 100,
      name: "all industries",
    },
    {
      id: 101,
      name: "industry-1",
    },
    {
      id: 102,
      name: "industry-2",
    },
    {
      id: 103,
      name: "industry-3",
    },
  ];

  const scrollHandler = (event) => {
    const loadingTrigger =
      event.target.documentElement.scrollHeight -
      (event.target.documentElement.scrollTop + window.innerHeight);

    if (loadingTrigger < 100 && page < pageLimit) {
      setIsFetching(true);
    }
  };

  async function getCases() {
    const response = await fetch(`http://localhost:5000/cases-${page}`);
    if (response.ok === true) return response.json();
  }

  const handleIndustryFilterChange = (id) => {
    setSelectedIndustryId(id);
  };

  useEffect(() => {
    if (isFetching) {
      getCases()
        .then((data) => {
          setCases([...cases, ...data]);
          setPage(page + 1);
        })
        .finally(() => setIsFetching(false));
    }
  }, [isFetching, scrollHandler]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, [page]);

  const filteredCases = cases?.filter(
    ({ industryId }) => industryId === selectedIndustryId
  );

  const gridCases = transformDataForLayout(
    filteredCases.length === 0 ? cases : filteredCases,
    descriptionItems
  );

  return (
    <div className="home-page">
      <FirstScreen />
      <div className="filter-bar">
        <div className="container">
          <DropDown
            optionList={industries}
            placeholder="all industries"
            label="in"
            onChange={handleIndustryFilterChange}
            selectedId={selectedIndustryId}
          />
        </div>
      </div>

      <div className="case-list">
        {cases &&
          gridCases.map((caseItem) => {
            if (Array.isArray(caseItem.item)) {
              return (
                <CaseDescription
                  descriptions={caseItem.item}
                  key={caseItem.id}
                />
              );
            } else {
              return (
                <CasePreview
                  key={caseItem.item.id}
                  brand={caseItem.item.brand}
                  title={caseItem.item.title}
                  image={caseItem.item.image}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
