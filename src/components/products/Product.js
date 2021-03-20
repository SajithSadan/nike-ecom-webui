import React from "react";
import classnames from "classnames";
import { HiX } from "react-icons/hi";
import Size from "./Size";
import AddToCart from "./AddToCart";

const Product = (props) => {
  const { product, width, active, index, selected, handleSelected } = props;

  const classNameList = classnames("product", {
    active: index === active,
    selected: index === selected,
  });
  const wrapperClassList = classnames("productWrapper", {
    selected: index === selected,
  });

  return (
    <div className={wrapperClassList} style={{ width: width }}>
      <div
        className={classNameList}
        style={{
          color: `${product.textColor}`,
          cursor: "pointer",
        }}
        onClick={() => handleSelected(index)}
      >
        <div
          className="productBg"
          style={{
            backgroundColor: `${product.bgColor}`,
          }}
        ></div>
        <span
          className="closeBtn"
          style={{
            color: `${product.textColor}`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleSelected(null);
          }}
        >
          <HiX />
        </span>
        <h3 className="productName">{product.name}</h3>
        <span className="price">{product.price}</span>
        <img src={product.image} alt="" />
      </div>
      <div className="productDetails">
        <div className="prdTitle">
          <span className="prdName">{product.name}</span>
          <span className="prdPrice">{product.price}</span>
        </div>
        <p className="prdDesc">{product.description}</p>
        <Size />
        <AddToCart />
      </div>
    </div>
  );
};

export default Product;
