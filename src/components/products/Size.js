import React, { useState } from "react";

const Size = () => {
  const sizeList = [
    "UK 6",
    "UK 7",
    "UK 8",
    "UK 9",
    "UK 10",
    "UK 11",
    "UK 12",
    "UK 13",
  ];
  const [active, setActive] = useState(null);
  return (
    <div className="sizeChart">
      <h4>Select Size</h4>
      <div className="sizeChipWrapper">
        {sizeList.map((size, index) => (
          <span
            key={index}
            onClick={() => setActive(index)}
            className={active === index ? "selectedSize sizeChip" : "sizeChip"}
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Size;
