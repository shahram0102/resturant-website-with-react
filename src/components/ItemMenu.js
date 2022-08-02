import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

function ItemMenu({ imageSrc, name }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive(!active)}
      className={` bg-zinc-900 shadow-black  w-24 h-28 min-w-[96px] cursor-pointer  rounded-lg`}
    >
      <div
        className={`${
          active && "bg-orange-500 text-zinc-900 "
        }w-full py-2 h-full rounded-lg flex flex-col justify-center items-center`}
      >
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={imageSrc}
            className="w-full h-full object-cover"
            alt={name}
          />
        </div>
        <div className="flex flex-col gap-1  justify-center items-center">
          <h4>{name}</h4>
          <BiChevronRight className="bg-orange-700 text-zinc-900 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default ItemMenu;
