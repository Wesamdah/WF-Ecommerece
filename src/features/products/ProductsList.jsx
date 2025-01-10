import React from "react";
// assets
import wideBackGround from "../../assets/imgs/largeBackGround.png";
import mobileBackGround from "../../assets/imgs/mobile_background.webp";
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
  // let backgroundImage =
  //   window.innerWidth <= 768 ? mobileBackGround : wideBackGround;

  return (
    <main>
      <section className="relative h-[600px] w-full md:h-[420px] md:w-[calc(100vw_-_16px)]">
        <img
          // src={backgroundImage}
          src={wideBackGround}
          alt="Background"
          className="absolute hidden h-full w-full md:block"
        />
        <img
          src={mobileBackGround}
          alt="Background"
          className="absolute block h-full w-full md:hidden"
        />

        <div className="absolute left-[10%] top-[70%] text-2xl font-semibold uppercase text-[white] sm:text-4xl md:top-[40%] md:text-5xl lg:text-7xl">
          <span>new</span>
          <br />
          <span>collection</span>
          <br />
          <span className="last-of-type:text-4xl">spring/summer 2025</span>
        </div>
      </section>
      <section className="h-[480px] w-full p-5 md:px-16 md:py-12">
        <p className="text-xl font-semibold uppercase text-[black] md:text-3xl">
          trending now
        </p>
        <ProductSlider idName="trending_now" array={orederProductsIds} />
      </section>
      <section className="h-fit min-h-[480px] w-full bg-[#F4F4F5] p-5 md:px-16 md:py-12 lg:h-[480px]">
        <p className="text-xl font-semibold uppercase text-[black] md:text-3xl">
          SPRING/SUMMER 2025
        </p>
        {productStatus === "loading" ? (
          <div className="flex h-[480px] animate-pulse items-center justify-center bg-[#eee5e5]">
            <img src={logo} alt="" className="h-10 w-10" />
          </div>
        ) : productStatus === "succeeded" ? (
          <div
            id="spring_summer"
            className="mt-5 flex flex-wrap items-center justify-between"
          >
            {orederProductsIds
              .filter((_, index) => index < 4)
              .map((productId, index) => (
                <div
                  key={index}
                  className={`${index === 0 || index === 3 ? "w-[58%] lg:w-[33%]" : "w-[40%] lg:w-[15%]"} my-5 lg:my-0`}
                >
                  {index === 0 || index === 3 ? (
                    <ProductCard productId={productId} color />
                  ) : (
                    <ProductCard productId={productId} />
                  )}
                </div>
              ))}
          </div>
        ) : (
          <p>error</p>
        )}
      </section>
      <section className="h-[480px] w-full p-5 md:px-16 md:py-12">
        <p className="text-lg font-semibold uppercase text-[black] sm:text-xl md:text-3xl">
          RECOMMENDED FOR YOU
        </p>
        <ProductSlider idName="recommended_for_you" array={orederProductsIds} />
      </section>
      <section className="relative h-[480px] w-full bg-[#F4F4F5] py-12">
        <div className="flex h-full w-full flex-col gap-7 bg-[#706C63] p-8 text-[#ffffff] sm:w-[60%] sm:p-12">
          <h2 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            It’s all about you
          </h2>
          <p className="w-full font-normal sm:w-[60%] md:text-justify md:text-lg lg:w-2/4 lg:text-left lg:text-xl">
            Try now, pay later. We want that you’re really confident and happy
            with your purchase - you have 30 days before we charge you! Learn
            more about our policy.
          </p>
          <div
            className={
              "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-2 border-solid border-[#ffffff] drop-shadow-[0_4px_8px_rgba(35,38,59,0.5)] lg:hover:text-orange"
            }
          >
            <Icon
              icon="mdi:arrow-right"
              className="text-blue-600 flex items-center justify-center text-2xl"
            />
          </div>
        </div>
        <div className="absolute right-[30px] top-[100px] hidden h-3/4 w-[60%] sm:block">
          <img
            src={bannerBg}
            alt="largeBackGround.."
            className="h-full w-full"
          />
        </div>
      </section>
      <section className="h-[480px] w-full p-5 md:px-16 md:py-12">
        <p className="text-xl font-semibold uppercase text-[black] md:text-3xl">
          NEW IN... ACCESORIES
        </p>
        <ProductSlider idName="accesories" array={orederProductsIds} />
      </section>
    </main>
  );
}
