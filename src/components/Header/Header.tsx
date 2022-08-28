import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Navbar />
    </div>
  );
}


export default Header