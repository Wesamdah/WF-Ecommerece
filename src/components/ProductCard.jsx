import React from "react";
import testImage from "../assets/imgs/onlineShopping.png";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductCard({ allProducts }) {
  const singleProduct = allProducts.filter(
    (item) => item.id === "676853626d9a45d33ea2320c",
  );
  console.log(singleProduct[0]);
  return (
    <>
      {singleProduct.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="h-72 w-44 bg-[#eee]">
          <div className="relative bg-[red]">
            {/* <img src={singleProduct.image} /> */}
            <img src={testImage} className="" />
            <Icon
              icon={"mdi:heart-outline"}
              className="absolute right-3 top-3 h-6 w-6 cursor-pointer border border-[white] p-1 text-[white]"
            />
            <span
              className={`${singleProduct[0].atSale ? "flex" : "hidden"} absolute bottom-2 left-2 h-5 w-14 items-center justify-center bg-orange text-sm font-semibold text-[white]`}
            >
              SALE
            </span>
          </div>
          <div className="mt-1 flex flex-col">
            <p className="mb-1 uppercase text-[#91929D]">
              {singleProduct[0].company} / {singleProduct[0].category}
            </p>
            <p className="capitalize">{singleProduct[0].name}</p>
            <p className="font-semibold">
              {singleProduct[0].price.toString().slice(0, 2)},
              {singleProduct[0].price.toString().slice(2, 3)} $
            </p>
          </div>
          <p>({singleProduct[0].numOfReviews})</p>
        </div>
      )}
    </>
  );
}
