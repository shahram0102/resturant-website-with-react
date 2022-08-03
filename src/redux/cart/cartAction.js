const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

const increase = (product) => {
  return {
    type: "INCREASE",
    payload: product,
  };
};

const decrease = (product) => {
  return {
    type: "DECREASE",
    payload: product,
  };
};

const clear = ()=>{
   return{
      type:"CLEAR"
   }
}

export { addToCart, removeFromCart, increase, decrease,clear };
