import React from "react";
import { HiArrowNarrowLeft, HiSearch } from "react-icons/hi";

const TopBar = () => {
  return (
    <div className="topBar">
      <span className="backBtn">
        <HiArrowNarrowLeft />
      </span>
      <span className="searchBtn">
        <HiSearch />
      </span>
    </div>
  );
};

export default TopBar;
