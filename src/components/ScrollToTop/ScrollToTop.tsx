import React, { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "./../../icons/arrow-up.svg";

import "./ScrollToTop.scss";

const ScrollToTop: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 400) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm" onClick={goToTop}>
      {showTopBtn && (
        <>
          <Arrow className="top-to-btm_icon" />
          <p>TOP</p>
        </>
      )}
    </div>
  );
};
export default ScrollToTop;
