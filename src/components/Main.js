import React from "react";

// icons
import { FiChevronRight } from "react-icons/fi";

import { Link } from "react-router-dom";

// images
import heroImage from "../images/heroImg.png";
import burger from "../images/burger-category.png";
import pizza from "../images/pizza-vegetable.png";
import french from "../images/french-fries.png";
import hot from "../images/hot-dog-category.jpg";
import salad from "../images/salad-category.jpg";
import drink from "../images/drink.png";

import { SubMenu } from "../common/SubMenu";
import ItemMenu from "./ItemMenu";
import { Products } from "./Products";


const Main = () => {

  return (
    <main className="mt-6 w-full h-full mb-24 flex flex-col px-4 sm:p-0">
      <HeroSection />


        <SubMenu name={"Menu category"} icon={<FiChevronRight />} />

      <div className="mt-2 flex gap-3 no-scrollbar container m-auto  items-center overflow-x-auto overflow-y-hidden">
        <Link to="/products/pizza">
          <ItemMenu imageSrc={pizza} name={"pizza"} />
        </Link>
        <Link to="/products/salad">
          <ItemMenu imageSrc={salad} name={"salad"} />
        </Link>
        <Link to="/products/french">
          <ItemMenu imageSrc={french} name={"french fries"} />
        </Link>
        <Link to="/products/drink">
          <ItemMenu imageSrc={drink} name={"drink"} />
        </Link>
        <Link to="/products/burger">
          <ItemMenu imageSrc={burger} name={"burger"} />
        </Link>
        <Link to="/products/hotdog">
          <ItemMenu imageSrc={hot} name={"hot dog"} />
        </Link>
      </div>
      <Products />
      {/* <section className="mt-16 container   m-auto gap-x-3 gap-y-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section> */}
    </main>
  );
};

export default Main;

const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 max-h-[300px] bg-orange-300 rounded-lg  container m-auto">
      <div className="px-4 py-2 flex flex-col gap-2">
        <h2 className="text-zinc-800 text-3xl sm:text-5xl lg:text-7xl">
          Hi Customers
        </h2>
        <p className="text-zinc-500 text-lg sm:text-2xl lg:text-4xl">
          <span className="text-orange-500">20%</span> discount on <br /> some
          foods
        </p>

        <Link to="/customers">
          <button className="rounded-full font-semibold text-lg text-white bg-orange-500 py-2 px-5">
            Learn More
          </button>
        </Link>
      </div>

      <img src={heroImage} className="h-full w-full" alt="hero" />
    </section>
  );
};
