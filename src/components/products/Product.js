import React from "react";

const Product = (props) => {
  const { product, width } = props;
  return (
    <div className="productWrapper" style={{ width: width }}>
      <div
        className="product"
        style={{
          backgroundColor: `${product.bgColor}`,
          color: `${product.textColor}`,
        }}
      >
        <h3>{product.name}</h3>
        <span className="price">{product.price}</span>
        <img src={product.image} alt="" />
      </div>
    </div>
  );
};

export default Product;
