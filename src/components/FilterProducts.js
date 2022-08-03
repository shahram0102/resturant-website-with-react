import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "./Product";
import { Loader } from "../common/Loader";
import { fetchProducts } from "../redux/products/productsAction";
import { useDispatch } from "react-redux";

import { BsChevronLeft } from "react-icons/bs";

const FilterProducts = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { loading, products, error } = useSelector(
    (state) => state.productsState
  );
  const navigate = useNavigate();
  const filterProducts = products.filter((p) => p.category === category);
  console.log(filterProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="mt-28 container relative  m-auto gap-x-3 gap-y-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div
        onClick={() => navigate(-1)}
        className="absolute flex gap-1 cursor-pointer w-16 h-16 justify-center items-center -top-28 left-0"
      >
        <BsChevronLeft className="text-zinc-900 rounded bg-orange-500 " />
        <span>back</span>
      </div>
      {loading ? (
        <div className="w-full h-full flex justify-center">
          <Loader />
        </div>
      ) : error ? (
        <p>error</p>
      ) : (
        filterProducts &&
        filterProducts.map((p) => {
          return <Product key={p.id} productData={p} />;
        })
      )}
    </div>
  );
};

export default FilterProducts;
