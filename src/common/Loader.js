import React from "react";
import { Triangle } from  'react-loader-spinner'

export const Loader = () => {
  return (
    <Triangle
      height="80"
      width="80"
      radius="9"
      color="orange"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
};
