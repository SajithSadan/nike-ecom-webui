import React, { useState } from "react";
import Product from "./Product";
import Swipe from "react-easy-swipe";

const Products = ({ products }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [xPos, setXPos] = useState(0);
  const [active, setActive] = useState(0);

  const [containerWidth, setContainerWidth] = useState(
    `${width * products.length}px`
  );

  const onSwipeLeft = (event) => {
    const newActive = active < products.length - 1 ? active + 1 : active;
    const newXPos = newActive === active ? xPos : xPos - width;
    setXPos(newXPos);
    setActive(newActive);
  };
  const onSwipeRight = (event) => {
    const newActive = active > 0 ? active - 1 : active;
    const newXPos = newActive === active ? xPos : xPos + width;
    setXPos(newXPos);
    setActive(newActive);
  };

  return (
    <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <div className="listWrapper">
        <div
          className="productList"
          style={{ width: containerWidth, transform: `translateX(${xPos}px)` }}
        >
          {products.map((shoe, index) => (
            <Product
              product={shoe}
              key={shoe.id}
              width={width}
              active={active}
              index={index}
            />
          ))}
        </div>
      </div>
    </Swipe>
  );
};

export default Products;
