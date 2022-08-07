import React, { useEffect, useState } from "react";

// react router dom
import { Link } from "react-router-dom";

// icons
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartAction";

const checkInCart = (cart, product) => {
  return cart.find((item) => item.id === product.id);
};

export const Product = ({ productData }) => {
  const[isFavorite,setIsFavorite] = useState(false)
  const { name, price, image, rate, favorite } = productData;
  const cartState = useSelector((state) => state.cartState);
  const dispatch = useDispatch();


  return (
    <div className="bg-zinc-900  py-2 px-2 rounded-2xl flex flex-col items-center">
      <div className="w-full relative pb-16">
        <img
          src={image}
          className="w-40 rounded-full h-32 absolute -top-16 left-0"
          alt={name}
        />
        <span
          onClick={()=>setIsFavorite(!isFavorite)}
          className="absolute bottom-0 right-3 cursor-pointer"
        >
          <BsFillHeartFill
            className={`${isFavorite ? "text-red-700" : "text-red-200"}`}
          />
        </span>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h2 className="font-semibold text-lg">{name}</h2>
        <span className="flex items-center gap-1">
          {rate} <AiFillStar />
        </span>
      </div>
      <div className="w-full flex justify-between mt-3">
        <div className=" flex gap-1">
          <span className="text-orange-300">$</span>
          <span className="text-lg">{price}</span>
        </div>
        {checkInCart(cartState.selectedItems, productData) ? (
          <Link to="/cart">Go to soppingCard</Link>
        ) : (
          <button
            onClick={() => dispatch(addToCart(productData))}
            className="text-3xl cursor-pointer"
          >
            <AiFillPlusCircle />
          </button>
        )}
      </div>
    </div>
  );
};
