import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dot } from "./../../icons/dot.svg";

import "./CasePreview.scss";

interface iProps {
  brand: string;
  title: string;
  image: string;
}

const CasePreview: React.FC<iProps> = ({ brand, title, image }) => {
  return (
    <div
      className="case-preview"
      style={{ background: `center / cover no-repeat url(${image})` }}
    >
      <div className="case-preview_brand">{brand}</div>
      <div className="case-preview_title">{title}</div>
      <Link className="case-preview_read-more" to="/work">
        <Dot className="dot" />
        Read more
      </Link>
    </div>
  );
};

export default CasePreview;
