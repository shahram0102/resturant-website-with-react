import React from "react";
// icons
import { FiChevronRight } from "react-icons/fi";
import { BiTrashAlt } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  decrease,
  increase,
  removeFromCart,
} from "../redux/cart/cartAction";

import emptyCart from "../images/Empty-cart-panel.png";

// components
import { SubMenu } from "../common/SubMenu";

const Cart = () => {
  const { total, selectedItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  if (selectedItems.length === 0) {
    return (
      <section className="container flex flex-col items-center m-auto w-full h-full  px-2">
        <SubMenu name={"Back Home"} icon={<FiChevronRight />} />
        <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl">Your Cart Is Empty</h2>
          <img src={emptyCart} className="w-96 h-96 " />

        </div>
      </section>
    );
  }

  return (
    <section className="container m-auto  px-2">
      <SubMenu name={"Back Home"} icon={<FiChevronRight />} />
      <div className="flex flex-col justify-center lg:flex-row mt-2 gap-4 w-full">
        <div className="flex flex-auto gap-4 flex-col lg:w-2/3">
          {selectedItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex w-full  px-3 overflow-hidden rounded-2xl bg-zinc-900 gap-2  items-end py-1 justify-between "
              >
                <img src={item.image} className="w-16 h-16 rounded-full" />
                <div className="h-full mr-auto">
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className="text-orange-300">* {item.quantity}</p>
                </div>

                <div className="flex gap-4 mr-8 text-3xl">
                  <button onClick={() => dispatch(removeFromCart(item))}>
                    <BiTrashAlt />
                  </button>
                  {item.quantity > 1 && (
                    <button onClick={() => dispatch(decrease(item))}>
                      {item.quantity === 1 ? <BiTrashAlt /> : "-"}
                    </button>
                  )}
                  <button onClick={() => dispatch(increase(item))}>+</button>
                </div>
                <p className="text-2xl">
                  <span className="text-orange-300">$</span> {item.price}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex w-full lg:w-1/3 max-h-[100px] max-w-md flex-auto flex-col gap-2">
          <div className="flex gap-1 justify-between">
            <p>Total</p>
            <div>
              <span>{total.toFixed(2)}</span>
              <span>$</span>
            </div>
          </div>
          <button className="flex font-bold text-xl justify-center items-center w-full bg-orange-500 text-zinc-900 rounded-lg py-2 ">
            Check Out
          </button>
          <button
            onClick={() => dispatch(clear())}
            className="flex font-bold text-xl justify-center items-center w-full bg-orange-500 text-zinc-900 rounded-lg py-2 "
          >
            clear
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
