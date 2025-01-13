import React from "react";
import logo from "../assets/imgs/IconLogo.png";

export default function Footer() {
  return (
    <>
      <footer className="h-fit w-full gap-2 bg-[#F4F4F5] p-2 sm:px-16 sm:py-12 [&_p]:cursor-pointer">
        <div className="flex h-fit w-full flex-row flex-wrap items-center gap-6 lg:justify-normal">
          <div className="flex h-fit w-full justify-around lg:w-[48%] lg:justify-around">
            <div className="flex flex-col items-center gap-1 lg:items-start">
              <h3 className="flex flex-col text-sm font-[400]">Footer 1</h3>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
            </div>
            <div className="flex flex-col items-center gap-1 lg:items-start">
              <h3 className="flex flex-col text-sm font-[400]">Footer 2</h3>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
            </div>
            <div className="flex flex-col items-center gap-1 lg:items-start">
              <h3 className="flex flex-col text-sm font-[400]">Footer 3</h3>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
            </div>
          </div>
          <div className="flex h-fit w-full justify-around lg:w-[48%] lg:justify-around">
            <div className="flex flex-col items-center gap-1 lg:items-start">
              <h3 className="flex flex-col text-sm font-[400]">Footer 4</h3>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
            </div>
            <div className="flex flex-col items-center gap-1 lg:items-start">
              <h3 className="flex flex-col text-sm font-[400]">Footer 5</h3>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
            </div>
            <div className="flex flex-col items-center gap-1 lg:items-start">
              <h3 className="flex flex-col text-sm font-[400]">Footer 6</h3>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
              <p className="text-xs font-[400] text-[#91929D]">item</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex h-16 items-center justify-center bg-[#23263B]">
        <img src={logo} className="h-9 w-9" alt="" />
      </div>
    </>
  );
}
