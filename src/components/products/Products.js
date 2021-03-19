import React, { useState } from "react";
import Product from "./Product";
import Swipe from "react-easy-swipe";

const Products = ({ products }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [xPos, setXPos] = useState(0);

  const [containerWidth, setContainerWidth] = useState(
    `${width * products.length}px`
  );

  const onSwipeLeft = (event) => {
    const newXPos = xPos - width;
    setXPos(newXPos);
  };
  const onSwipeRight = (event) => {
    const newXPos = xPos + width;
    setXPos(newXPos);
  };

  return (
    <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <div className="listWrapper">
        <div
          className="productList"
          style={{ width: containerWidth, transform: `translateX(${xPos}px)` }}
        >
          {products.map((shoe) => (
            <Product product={shoe} key={shoe.id} width={width} />
          ))}
        </div>
      </div>
    </Swipe>
  );
};

export default Products;
