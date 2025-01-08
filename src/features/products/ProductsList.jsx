import React from "react";
// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// assets
import backGround from "../../assets/imgs/largeBackGround.png";
import bannerBg from "../../assets/imgs/bannerBackGround.png";
import logo from "../../assets/imgs/IconLogo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
// redux
import { useSelector } from "react-redux";
import { selectProductIds, getProductsStatus } from "./productsSlice";
// components
import ProductCard from "../../components/ProductCard";
import ProductSlider from "./ProductSlider";

export default function ProductsList() {
  const orederProductsIds = useSelector(selectProductIds);
  const productStatus = useSelector(getProductsStatus);

  return (
    <main>
      <section className="relative h-[420px] w-[calc(100vw_-_16px)]">
        <img
          src={backGround}
          alt="largeBackGround.."
          className="absolute h-full w-full"
        />
        <div className="absolute left-36 top-[40%] text-7xl font-semibold uppercase text-[white]">
          <span>new</span>
          <br />
          <span>collection</span>
          <br />
          <span className="last-of-type:text-4xl">spring/summer 2025</span>
        </div>
      </section>
      <section className="h-[480px] w-full px-16 py-12">
        <p className="text-3xl font-semibold uppercase text-[black]">
          trending now
        </p>
        <ProductSlider idName="trending_now" array={orederProductsIds} />
      </section>
      <section className="h-[480px] w-full bg-[#F4F4F5] px-16 py-12">
        <p className="text-3xl font-semibold uppercase text-[black]">
          SPRING/SUMMER 2021
        </p>
        {productStatus === "loading" ? (
          <div className="flex h-full animate-pulse items-center justify-center bg-[#eee5e5]">
            <img src={logo} alt="" className="h-10 w-10" />
          </div>
        ) : productStatus === "succeeded" ? (
          <div
            id="spring_summer"
            className="mt-5 flex items-center justify-between"
          >
            {orederProductsIds
              .filter((_, index) => index < 4)
              .map((productId, index) => (
                <div
                  key={index}
                  className={`${index === 0 || index === 3 ? "w-[33%]" : "w-[15%]"} ]`}
                >
                  {index === 0 || index === 3 ? (
                    <ProductCard productId={productId} full color />
                  ) : (
                    <ProductCard productId={productId} full />
                  )}
                </div>
              ))}
          </div>
        ) : (
          <p>error</p>
        )}
      </section>
      <section className="h-[480px] w-full px-16 py-12">
        <p className="text-3xl font-semibold uppercase text-[black]">
          RECOMMENDED FOR YOU
        </p>
        <ProductSlider idName="recommended_for_you" array={orederProductsIds} />
      </section>
      <section className="relative h-[480px] w-full bg-[#F4F4F5] py-12">
        <div className="flex h-full w-[60%] flex-col gap-7 bg-[#706C63] p-12 text-[#ffffff]">
          <h2 className="text-3xl font-semibold">It’s all about you</h2>
          <p className="w-2/4 text-left text-xl font-normal">
            Try now, pay later. We want that you’re really confident and happy
            with your purchase - you have 30 days before we charge you! Learn
            more about our policy.
          </p>
          <div
            className={
              "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-2 border-solid border-[#ffffff] drop-shadow-[0_4px_8px_rgba(35,38,59,0.5)] hover:text-orange"
            }
          >
            <Icon
              icon="mdi:arrow-right"
              className="text-blue-600 flex items-center justify-center text-2xl"
            />
          </div>
        </div>
        <div className="absolute right-[30px] top-[100px] h-3/4 w-[60%]">
          <img
            src={bannerBg}
            alt="largeBackGround.."
            className="h-full w-full"
          />
        </div>
      </section>
      <section className="h-[480px] w-full px-16 py-12">
        <p className="text-3xl font-semibold uppercase text-[black]">
          NEW IN... ACCESORIES
        </p>
        <ProductSlider idName="accesories" array={orederProductsIds} />
      </section>
    </main>
  );
}
