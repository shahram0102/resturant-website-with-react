import React, { useEffect } from "react";
import { Product } from "./Product";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { fetchProducts } from "../redux/products/productsAction";

export const Products = () => {
  const { loading, products, error } = useSelector(
    (state) => state.productsState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products, loading, error);

  return (
    <section className="mt-16 container   m-auto gap-x-3 gap-y-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>error</p>
      ) : (
        products &&
        products.map((product) => {
          return <Product key={product.id} productData={product} />;
        })
      )}
    </section>
  );
};
