import React from "react";

import notFound from "../images/not-found.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-full h-full container m-auto flex  flex-col items-center  mt-28 ">
      <Link to={"/"}>Go Back To Home</Link>
      <img src={notFound} alt="not found" />
    </div>
  );
};
