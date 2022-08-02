import React from "react";

// icons
import { FiChevronRight } from "react-icons/fi";

import { Link } from "react-router-dom";

// images
import heroImage from "../images/heroImg.png";

import { SubMenu } from "../common/SubMenu";

const Main = () => {
  return (
    <main className="mt-6 flex flex-col px-4 sm:p-0">
      <HeroSection />
      <SubMenu name={"Menu category"} icon={<FiChevronRight />} />
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

      <img src={heroImage} className="h-full w-full" />
    </section>
  );
};
