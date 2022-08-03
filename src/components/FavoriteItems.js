import React, { useEffect } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/products/productsAction";
import { Product } from "./Product";

function FavoriteItems() {
  const { products } = useSelector((state) => state.productsState);
  const favoriteProducts = products.filter((product) => product.favorite);
  const navigate = useNavigate();
  const pathname = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="container relative min-h-screen  mt-30  m-auto flex flex-col items-center">
      {pathname !== "/" && (
        <div
          onClick={() => navigate(-1)}
          className="absolute flex gap-1 mt-28 cursor-pointer w-16 h-16 justify-center items-center -top-28 left-0"
        >
          <BsChevronLeft className="text-zinc-900 rounded bg-orange-500 " />
          <span>back</span>
        </div>
      )}
      {favoriteProducts.length ? (
        <h2 className="text-3xl my-12">Your Favorite and Delicious Foods</h2>
      ) : (
        <h2 className="text-3xl my-12">Your Favorite Food List Is Empty</h2>
      )}
      <div className="gap-x-3 gap-y-16 mt-10 grid grid-cols-2 w-full sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {favoriteProducts &&
          favoriteProducts.map((product) => {
            return <Product key={product.id} productData={product} />;
          })}
      </div>
    </section>
  );
}

export default FavoriteItems;
