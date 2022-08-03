import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "./Product";

const FilterProducts = () => {
  const { category } = useParams();
  const { loading, products, error } = useSelector(
    (state) => state.productsState
  );
  const filterProducts = products.filter((p) => p.category === category);
  console.log(filterProducts);
  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>error</p>
      ) : (
        filterProducts &&
        filterProducts.map((p) => {
        return  <Product key={p.id} productData={p} />;
        })
      )}
    </div>
  );
};

export default FilterProducts;
