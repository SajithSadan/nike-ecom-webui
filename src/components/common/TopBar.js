import React from "react";
import { HiArrowNarrowLeft, HiSearch } from "react-icons/hi";

const TopBar = () => {
  return (
    <div className="topBar">
      <span className="backBtn">
        <img
          src="https://sajithsadanandan.com/demos/nike-images/Logo_NIKE.svg"
          alt="Nike Logo"
          style={{ height: "30px" }}
        />
      </span>
      <span className="searchBtn">
        <HiSearch />
      </span>
    </div>
  );
};

export default TopBar;
