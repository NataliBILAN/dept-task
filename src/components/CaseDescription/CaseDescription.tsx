import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dot } from "./../../icons/dot.svg";

import "./CaseDescription.scss";
import { iCaseOption } from "../../interfaces/case";

interface iProps {
  descriptions: iCaseOption[];
}

const CaseDescription: React.FC<iProps> = ({ descriptions }) => {
  return (
    <div className="case-descriptions">
      {descriptions.length <= 3 &&
        descriptions.map(({ id, brand, title }) => {
          return (
            <div key={id} className="case-description">
              <div className="case-description_brand">{brand}</div>
              <div className="case-description_title">{title}</div>
              <Link className="case-description_read-more" to="/work">
                <Dot className="dot" />
                Read more
              </Link>
            </div>
          );
        })}
    </div>
  );
};
export default CaseDescription;
