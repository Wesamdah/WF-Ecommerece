import React from "react";
import logo from "../assets/imgs/IconLogo.png";

export default function Footer() {
  return (
    <>
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
  );
}
