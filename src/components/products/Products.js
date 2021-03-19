import React, { useState, useEffect } from "react";
import Product from "./Product";
import Swipe from "react-easy-swipe";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Products = ({ products }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [xPos, setXPos] = useState(0);
  const [active, setActive] = useState(0);
  const [containerWidth, setContainerWidth] = useState(
    `${width * products.length}px`
  );
  const [showSliderNav, setShowSliderNav] = useState(false);

  const calculateThumbWidth = () => {
    if (window.matchMedia("screen and (max-width: 600px)").matches) {
      setWidth(window.innerWidth);
      setShowSliderNav(false);
    } else {
      setWidth(420);
      setShowSliderNav(true);
    }
  };

  useEffect(calculateThumbWidth, []);

  useEffect(() => {
    setContainerWidth(`${width * products.length}px`);
  }, [width]);

  const onSwipeLeft = (event) => {
    console.log("Swipe left");
    const newActive = active < products.length - 1 ? active + 1 : active;
    const newXPos = newActive === active ? xPos : xPos - width;
    setXPos(newXPos);
    setActive(newActive);
  };

  const onSwipeRight = (event) => {
    console.log("Swipe right");

    const newActive = active > 0 ? active - 1 : active;
    const newXPos = newActive === active ? xPos : xPos + width;
    setXPos(newXPos);
    setActive(newActive);
  };

  return (
    <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <div className="listWrapper">
        {showSliderNav && (
          <div className="slideNavs">
            <span className="leftArrow" onClick={onSwipeRight}>
              <HiArrowNarrowLeft />
            </span>
            <span className="rightArrow" onClick={onSwipeLeft}>
              <HiArrowNarrowRight />
            </span>
          </div>
        )}
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
