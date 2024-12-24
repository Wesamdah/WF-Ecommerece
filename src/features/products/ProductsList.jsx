import React, { useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react/dist/iconify.js";
// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import backGround from "../../assets/imgs/largeBackGround.png";
import bannerBg from "../../assets/imgs/bannerBackGround.png";
import logo from "../../assets/imgs/IconLogo.png";
// redux
import { useSelector } from "react-redux";
import { selectProductIds } from "./productsSlice";
// components
import ProductCard from "../../components/ProductCard";

export default function ProductsList() {
  const orederProductsIds = useSelector(selectProductIds);

  const [activeSlide, setActiveSlide] = useState(0);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`${activeSlide !== 3 ? "flex" : "hidden"} absolute right-[-30px] top-[50%] z-10 h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded bg-[white] drop-shadow-[0_4px_8px_rgba(35,38,59,0.5)] hover:text-orange`}
      >
        <Icon
          icon="mdi:arrow-right"
          className="text-blue-600 flex items-center justify-center text-2xl"
        />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`${activeSlide !== 0 ? "flex" : "hidden"} absolute left-[-50px] top-[50%] z-10 h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded bg-[white] drop-shadow-[0_4px_8px_rgba(35,38,59,0.5)] hover:text-orange`}
      >
        <Icon
          icon="mdi:arrow-left"
          className="text-blue-600 flex items-center justify-center text-2xl"
        />
      </div>
    );
  };

  const sliderSettings = {
    dots: false, // Enable pagination dots
    infinite: false, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 6, // Show 6 items at a time
    slidesToScroll: 1, // Scroll 1 item per click
    autoplay: false, // Auto slide
    autoplaySpeed: 3000, // Slide every 3 seconds
    pauseOnHover: true,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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
      {orederProductsIds.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <section className="h-[480px] w-full px-16 py-12">
            <p className="text-3xl font-semibold uppercase text-[black]">
              trending now
            </p>
            <div id="trending_now" className="mx-auto mt-5 w-[100%]">
              <Slider {...sliderSettings}>
                {orederProductsIds.map((productId, index) => (
                  <div key={index}>
                    <ProductCard productId={productId} />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
          <section className="h-[480px] w-full bg-[#F4F4F5] px-16 py-12">
            <p className="text-3xl font-semibold uppercase text-[black]">
              SPRING/SUMMER 2021
            </p>
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
                    <ProductCard productId={productId} full />
                  </div>
                ))}
            </div>
          </section>
          <section className="h-[480px] w-full px-16 py-12">
            <p className="text-3xl font-semibold uppercase text-[black]">
              RECOMMENDED FOR YOU
            </p>
            <div id="recommended_for_you" className="mx-auto mt-5 w-[100%]">
              <Slider {...sliderSettings}>
                {orederProductsIds.map((productId, index) => (
                  <div key={index}>
                    <ProductCard productId={productId} />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
          <section className="relative h-[480px] w-full bg-[#F4F4F5] py-12">
            <div className="flex h-full w-[60%] flex-col gap-7 bg-[#706C63] p-12 text-[#ffffff]">
              <h2 className="text-3xl font-semibold">It’s all about you</h2>
              <p className="w-2/4 text-left text-xl font-normal">
                Try now, pay later. We want that you’re really confident and
                happy with your purchase - you have 30 days before we charge
                you! Learn more about our policy.
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
            <div id="accesories" className="mx-auto mt-5 w-[100%]">
              <Slider {...sliderSettings}>
                {orederProductsIds.map((productId, index) => (
                  <div key={index}>
                    <ProductCard productId={productId} />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
          <footer className="w-full bg-[#F4F4F5] px-16 py-12">
            <div className="flex h-32 w-full flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="flex flex-col text-sm font-[400]">Footer 1</h3>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="flex flex-col text-sm font-[400]">Footer 2</h3>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="flex flex-col text-sm font-[400]">Footer 3</h3>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="flex flex-col text-sm font-[400]">Footer 4</h3>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="flex flex-col text-sm font-[400]">Footer 5</h3>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="flex flex-col text-sm font-[400]">Footer 6</h3>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
                <p className="text-xs font-[400] text-[#91929D]">item</p>
              </div>
            </div>
          </footer>
          <div className="flex h-16 items-center justify-center bg-[#23263B]">
            <img src={logo} className="h-9 w-9" alt="" />
          </div>
        </>
      )}
    </main>
  );
}
