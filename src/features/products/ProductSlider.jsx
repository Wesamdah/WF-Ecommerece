import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
import { getProductsStatus } from "./productsSlice";
// assets
import logo from "../../assets/imgs/IconLogo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import ProductCard from "../../components/ProductCard";

export default function ProductSlider({ idName, array }) {
  const productStatus = useSelector(getProductsStatus);

  const [activeSlide, setActiveSlide] = useState(0);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className={` ${activeSlide !== 3 ? "hidden lg:flex" : "hidden"} absolute right-[-50px] top-[50%] z-10 h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded bg-[white] drop-shadow-[0_4px_8px_rgba(35,38,59,0.5)] hover:text-orange`}
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
        className={` ${activeSlide !== 0 ? "hidden lg:flex" : "hidden"} absolute left-[-50px] top-[50%] z-10 h-10 w-10 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded bg-[white] drop-shadow-[0_4px_8px_rgba(35,38,59,0.5)] hover:text-orange`}
      >
        <Icon
          icon="mdi:arrow-left"
          className="text-blue-600 flex items-center justify-center text-2xl"
        />
      </div>
    );
  };

  const sliderSettings = {
    dots: false, // Disable pagination dots
    infinite: false,
    speed: 500, // Transition speed
    slidesToShow: 6, // Default: Show 6 items
    slidesToScroll: 1, // Scroll 1 item per click
    autoplay: false, // Disable autoplay
    autoplaySpeed: 3000, // Time between slides (if autoplay is enabled)
    pauseOnHover: true, // Pause autoplay on hover
    swipeToSlide: true, // Enable swipe gestures
    adaptiveHeight: true, // Adjust height dynamically
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024, // Large Screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium Screens (Tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small Screens (Mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Optional for better UX
          centerPadding: "10px",
        },
      },
    ],
  };

  if (productStatus === "loading") {
    return (
      <div className="flex h-full animate-pulse items-center justify-center bg-[#eee5e5]">
        <img src={logo} alt="" className="h-10 w-10" />
      </div>
    );
  }

  if (productStatus === "succeeded") {
    return (
      <div id={idName} className="mx-auto mt-5 w-full px-4">
        <Slider key={idName} {...sliderSettings}>
          {array.map((productId, index) => (
            <div key={index} className="px-2">
              <ProductCard productId={productId} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return <p>error</p>;
}
