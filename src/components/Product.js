import React from "react";

// icons
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

// image
import straw from "../images/strraw.png";

export const Product = () => {
  return (
    <div className="bg-zinc-900  py-2 px-2 rounded-2xl flex flex-col items-center">
      <div className="w-full relative pb-16">
        <img src={straw} className="w-full h-32 absolute -top-16 left-0" />
        <span className="absolute bottom-0 right-3">
          <BsFillHeartFill className="text-red-200" />
        </span>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h2 className="font-semibold text-lg">Burger Bistro</h2>
        <AiFillStar />
      </div>
      <div className="w-full flex justify-between mt-3">
        <div className=" flex gap-1">
          <span className="text-orange-300">$</span>
          <span className="text-lg">7.5</span>
        </div>
        <span className="text-3xl cursor-pointer">
          <AiFillPlusCircle />
        </span>
      </div>
    </div>
  );
};
