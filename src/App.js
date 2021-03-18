import React from "react";
import Header from "./components/common/Header";
import Products from "./components/products/Products";
import shoes from "./data/shoes";

const App = () => {
  return (
    <div>
      <Header />
      <Products products={shoes} />
    </div>
  );
};

export default App;
