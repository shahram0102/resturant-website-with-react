import React from "react";

import { Link } from "react-router-dom";

export const SubMenu = ({name,icon}) => {
  return (
    <div className="container m-auto flex w-full mt-2 justify-between">
      <p className="text-xl">{name}</p>
      <div className="flex gap-2 text-lg justify-between items-center">
        <span>view All</span>
        <Link className="bg-orange-500 text-zinc-800 rounded-md" to="/product">
          {icon}
        </Link>
      </div>
    </div>
  );
};
