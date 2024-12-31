import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
import { getProductsStatus } from "./productsSlice";
// assets
import logo from "../../assets/imgs/IconLogo.png";
import Slider from "react-slick";
import { Icon } from "@iconify/react/dist/iconify.js";
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
    accessibility: true,
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
      <div id={idName} className="mx-auto mt-5 w-[100%]">
        <Slider key={idName} {...sliderSettings}>
          {array.map((productId, index) => (
            <div key={index}>
              <ProductCard productId={productId} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return <p>error</p>;
}
