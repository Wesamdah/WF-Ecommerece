import React from "react";
// Images
import backGround from "../../assets/imgs/largeBackGround.png";
// components
import ProductCard from "../../components/ProductCard";
export default function ProductsList() {
  return (
    <main>
      <section className="relative h-[420px] w-screen">
        <img
          src={backGround}
          alt="largeBackGround.."
          className="absolute left-[-56px] h-full w-full"
        />
        <div className="absolute left-36 top-[40%] text-7xl font-semibold uppercase text-[white]">
          <span>new</span>
          <br />
          <span>collection</span>
          <br />
          <span className="last-of-type:text-4xl">spring/summer 2025</span>
        </div>
      </section>
      <section className="p-12">
        <div>
          <p className="uppercase text-[black]">trending now</p>
        </div>
      </section>
    </main>
  );
}
