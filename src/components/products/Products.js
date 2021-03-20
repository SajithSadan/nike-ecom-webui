import React, { useState, useEffect } from "react";
import Product from "./Product";
import Swipe from "react-easy-swipe";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { ARROW_LEFT, ARROW_RIGHT } from "../../types";
import classnames from "classnames";

const Products = ({ products }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [xPos, setXPos] = useState(0);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);
  const [containerWidth, setContainerWidth] = useState(
    `${width * products.length}px`
  );
  const [showSliderNav, setShowSliderNav] = useState(false);

  const classList = classnames("listWrapper", {
    detailPage: selected !== null,
  });

  const calculateThumbWidth = () => {
    if (window.matchMedia("screen and (max-width: 600px)").matches) {
      setWidth(window.innerWidth);
      setShowSliderNav(false);
    } else {
      setWidth(420);
      setShowSliderNav(true);
    }
  };

  const keyboardHandler = (event) => {
    if (event.keyCode === ARROW_RIGHT) {
      onSwipeLeft();
    } else if (event.keyCode === ARROW_LEFT) {
      onSwipeRight();
    }
  };

  useEffect(() => {
    calculateThumbWidth();
    window.addEventListener("resize", calculateThumbWidth);
    // window.addEventListener("keydown", keyboardHandler);
  }, []);

  useEffect(() => {
    setContainerWidth(`${width * products.length}px`);
  }, [width]);

  const onSwipeLeft = (event) => {
    if (selected !== null) {
      return false;
    } else {
      const newActive = active < products.length - 1 ? active + 1 : active;
      const newXPos = newActive === active ? xPos : xPos - width;
      setXPos(newXPos);
      setActive(newActive);
    }
  };

  const onSwipeRight = (event) => {
    if (selected !== null) {
      return false;
    } else {
      const newActive = active > 0 ? active - 1 : active;
      const newXPos = newActive === active ? xPos : xPos + width;
      setXPos(newXPos);
      setActive(newActive);
    }
  };

  const handleSelected = (index) => {
    index !== null ? setSelected(index) : setSelected(null);
  };

  return (
    <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <div className={classList}>
        {showSliderNav && (
          <>
            <span className="leftArrow" onClick={onSwipeRight}>
              <HiArrowNarrowLeft />
            </span>
            <span className="rightArrow" onClick={onSwipeLeft}>
              <HiArrowNarrowRight />
            </span>
          </>
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
              selected={selected}
              handleSelected={handleSelected}
            />
          ))}
        </div>
      </div>
    </Swipe>
  );
};

export default Products;
