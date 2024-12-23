import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
// imgs
import Logo from "../assets/imgs/iconLogo.png";

const SvgIcon = ({ theIcon }) => (
  <Icon icon={theIcon} className="mr-2 text-2xl hover:text-orange" />
);

const GenderOption = ({ label, selectedType, onClick }) => (
  <span
    onClick={() => onClick(label)}
    className={`${selectedType === label ? "text-[black]" : "text-[gray]"} cursor-pointer capitalize hover:text-orange`}
  >
    {label}
  </span>
);
export default function Header({ setType, type }) {
  const handleChooseGender = (selectedType) => {
    setType(selectedType);
  };

  return (
    <>
      <section className="flex h-9 w-full flex-row items-center justify-between">
        <div className="w-[40%]">
          <NavLink to={"/"} className="flex items-center">
            <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="logo!"
              className="h-12 w-16 cursor-pointer"
            />
            <div className="flex w-1/3 flex-col bg-gradient-to-r from-[#d62828] to-[#fcbf49] bg-clip-text pl-4 text-lg font-bold text-[transparent]">
              <span>Wessam & Firas</span>
              <span className="self-start">FASHION</span>
            </div>
          </NavLink>
        </div>
        <div className="flex w-[40%] flex-row justify-between">
          <div className="flex flex-row justify-between">
            <p className="mr-8 flex cursor-pointer flex-row items-center hover:text-orange">
              <SvgIcon theIcon="material-symbols:headset-mic-outline-sharp" />
              Support
            </p>
            <p className="flex cursor-pointer flex-row items-center hover:text-orange">
              <SvgIcon theIcon="hugeicons:location-09" />
              Find a store
            </p>
          </div>
          <div className="flex flex-row justify-between space-x-3">
            <span className="cursor-pointer">
              <SvgIcon theIcon="mdi:heart-outline" />
            </span>
            <span className="cursor-pointer">
              <SvgIcon theIcon="iconamoon:profile" />
            </span>
            <span className="cursor-pointer">
              <SvgIcon theIcon="ic:outline-local-grocery-store" />
            </span>
          </div>
        </div>
      </section>
      <section className="mt-10 flex h-8 w-full items-center space-x-4 text-lg font-medium text-[gray]">
        <GenderOption
          label="office"
          selectedType={type}
          onClick={handleChooseGender}
        />
        <GenderOption
          label="kitchen"
          selectedType={type}
          onClick={handleChooseGender}
        />
      </section>
      <hr className="w-full text-[#eee]" />
    </>
  );
}
