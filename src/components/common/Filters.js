import React, { useState } from "react";

const Filters = () => {
  const filterList = ["All", "Air Max", "Presto", "Huarache"];
  const [active, setActive] = useState(0);
  return (
    <div className="filterWrapper">
      {filterList.map((item, index) => (
        <span
          className={active === index ? "chip active" : "chip"}
          key={index}
          onClick={() => setActive(index)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Filters;
