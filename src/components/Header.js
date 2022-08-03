import React, { useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// react redux
import { useSelector } from "react-redux";

// images
import logo from "../images/logowebsite.png";
import avatar from "../images/User-Avatar.png";

// icons
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
  const [isShowName, setIsShowName] = useState(false);
  const itemState = useSelector((state) => state.cartState);
  return (
    <header className="sticky top-0 z-20 bg-zinc-900 shadow-sm shadow-orange-300 ">
      <div className="container m-auto justify-between  flex px-4 py-2">
        <div className="flex gap-1 md:w-5/6 w-4/6">
          <Link to="/">
            <div className="flex justify-center w-10 h-10 rounded-full overflow-hidden items-center">
              <img
                src={logo}
                alt="logo-website"
                className="w-full object-cover  h-full"
              />
            </div>
          </Link>
          <label className="flex w-44  md:w-full bg-zinc-800 px-2 gap-2 justify-center   items-center shadow-md rounded-full">
            <MdOutlineSearch className="text-xl" />
            <input
              type={"text"}
              placeholder="search"
              className="bg-transparent flex-1 w-full placeholder:text-orange-300 outline-none border-none"
            />
          </label>
        </div>
        <div className="flex w-2/6 md:w-1/6 justify-end">
          <Link to="/cart">
            <div className="flex relative cursor-pointer justify-center pr-2 pt-1 items-center">
              <MdOutlineShoppingCart className="text-orange-300 text-3xl" />
              <span className="absolute top-0 right-0 bg-orange-500 text-white w-5 h-5 rounded-full flex justify-center items-center">
                {itemState.selectedItems.length}
              </span>
            </div>
          </Link>
          <div className="flex justify-center w-20 items-center gap-1">
            {!isShowName && (
              <div className="w-10 h-10">
                <img className="w-full h-full object-cover" src={avatar} />
              </div>
            )}
            {isShowName && <h2>shahram</h2>}
          </div>

          <div
            onClick={() => setIsShowName(!isShowName)}
            className="flex justify-center items-center"
          >
            <RiMenu4Fill className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
