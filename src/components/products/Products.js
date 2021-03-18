import React, { useState } from "react";
import Product from "./Product";

const Products = ({ products }) => {
  const [width, setWdith] = useState(window.innerWidth);
  const [containerWidth, setContainerWidth] = useState(
    `${width * products.length}px`
  );
  return (
    <div className="listWrapper">
      <div className="productList" style={{ width: containerWidth }}>
        {products.map((shoe) => (
          <Product product={shoe} key={shoe.id} width={width} />
        ))}
      </div>
    </div>
  );
};

export default Products;
