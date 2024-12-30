import React from "react";
import testImage from "../assets/imgs/onlineShopping.png";
import { Icon } from "@iconify/react/dist/iconify.js";

// redux
import { useSelector } from "react-redux";
import { selectProductById } from "../features/products/productsSlice";

export default function ProductCard({ productId, full, color, item }) {
  const product =
    useSelector((state) => selectProductById(state, productId)) || item;

  return (
    <>
      <div className={`${full ? "w-full" : "w-48"} h-[300px]`}>
        <div className="relative bg-[red]">
          <img src={testImage} className="h-[192px]" />
          <Icon
            icon={"mdi:heart-outline"}
            className="absolute right-3 top-3 h-6 w-6 cursor-pointer border border-[white] p-1 text-[white]"
          />
          <span
            className={`${product.atSale ? "flex" : "hidden"} absolute bottom-2 left-2 h-5 w-14 items-center justify-center bg-orange text-sm font-semibold text-[white]`}
          >
            SALE
          </span>
        </div>
        <div className="mt-1 flex flex-col">
          <p className="mb-1 text-[12px] uppercase text-[#91929D]">
            {product.company} / {product.category}
          </p>
          <p className="text-[14px] capitalize">{product.name}</p>

          {color && (
            <div className="my-2 flex h-4 w-[100px] items-center justify-start space-x-2">
              {product.colors
                .filter((_, index) => index < 4)
                .map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className="h-5 w-5 cursor-pointer rounded-full border-2 border-[#ddd]"
                  ></div>
                ))}
            </div>
          )}
          <p className="font-semibold">
            {product.price.toString().slice(0, 2)},
            {product.price.toString().slice(2, 3)} $
          </p>
        </div>
        <p>({product.numOfReviews})</p>
      </div>
    </>
  );
}
