import React, { useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux/es/exports";
import {  fetchProductsSuccess } from "../redux/products/productsAction";

// components
import { Loader } from "../common/Loader";
import { Product } from "./Product";

// react router dom
import { useLocation, useNavigate } from "react-router-dom";
// react icons
import { BsChevronLeft } from "react-icons/bs";

export const Products = () => {
  const navigate = useNavigate();
  const { loading, products, error } = useSelector(
    (state) => state.productsState
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProductsSuccess());
    }, 1000);
  }, []);

  return (
    <section className="mt-28 container relative  m-auto gap-x-3 gap-y-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pathname !== "/" && (
        <div
          onClick={() => navigate(-1)}
          className="absolute flex gap-1 cursor-pointer w-16 h-16 justify-center items-center -top-28 left-0"
        >
          <BsChevronLeft className="text-zinc-900 rounded bg-orange-500 " />
          <span>back</span>
        </div>
      )}
      {loading ? (
        <div className="w-full h-full flex justify-center">
          <Loader />
        </div>
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
