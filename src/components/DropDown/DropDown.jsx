import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import { ReactComponent as Arrow } from "./../../icons/arrow.svg";

import "./DropDown.scss";

export default function DropDown({
  optionList,
  placeholder,
  label = "",
  onChange,
  selectedId,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (id) => () => {
    // setSelectedOptionId(id);
    console.log("dd", id);
    onChange(id);
    setIsOpen(false);
  };

  const selectedOption =
    selectedId &&
    optionList
      .filter(({ id }) => id === selectedId)
      .map((option) => option.name);

  useEffect(() => {
    const clickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown-toogle-wrap">
        {label}
        <div className="dropdown-toggle" onClick={toggling}>
          <div className="dropdown_header">{selectedOption || placeholder}</div>
          <Arrow
            className={classNames("dropdown-toggle_arrow", {
              "dropdown-toggle_arrow--open": isOpen === true,
            })}
          />
        </div>
      </div>
      <div
        className={classNames("dropdown_option-list", {
          "dropdown_option-list--open": isOpen === true,
        })}
      >
        {optionList.map(({ id, name }) => {
          return (
            <div
              className="dropdown_option"
              key={id}
              onClick={onOptionClicked(id)}
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
