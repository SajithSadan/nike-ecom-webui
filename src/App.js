import React from "react";
import Header from "./components/common/Header";
import Filters from "./components/common/Filters";
import Products from "./components/products/Products";
import shoes from "./data/shoes";

const App = () => {
  return (
    <div>
      <Header />
      <Filters />
      <Products products={shoes} />
    </div>
  );
};

export default App;
