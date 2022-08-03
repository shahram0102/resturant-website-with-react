import React from "react";

// react router dom
import { NavLink } from "react-router-dom";

// icons
import { BiHomeAlt } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";

const menusItems = [
  { id: 1, to: "/", icon: <BiHomeAlt /> },
  { id: 2, to: "/contactUs", icon: <BiMessageDetail /> },
  { id: 3, to: "/wallet", icon: <BiWalletAlt /> },
  { id: 4, to: "/favorite", icon: <BsFillHeartFill /> },
  { id: 5, to: "/setting", icon: <AiOutlineSetting /> },
];

export const BottomMenu = () => {
  return (
    <nav className="fixed w-full bottom-0 z-10  right-0 left-0">
      <ul className="px-3 items-center sm:w-[454px] m-auto bg-[rgba(0,0,0,.2)] flex justify-between h-16 rounded-tl-full rounded-br-full gap-2 py-1">
        {menusItems.map((item) => {
          return (
            <li
              className="flex items-center h-16 w-16 z-20"
              key={item.id}
            >
              <NavLink
                to={item.to}
                className={(navData) =>
                  `flex-col font-semibold  h-full justify-center items-center w-full ${
                    navData.isActive &&
                    "text-white rounded-tl-full rounded-r-full -translate-y-7 duration-500  bg-orange-500"
                  }`
                }
              >
                <span className="flex justify-center  h-full items-center text-2xl leading-[70px] text-center">
                  {item.icon}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
