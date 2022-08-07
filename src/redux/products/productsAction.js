import { products } from "../../db/data";

export const fetchProductsSuccess = () => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};

