import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import mainLogo from "../assets/imgs/main-logo.png";

const SvgIcon = ({ theIcon }) => (
  <Icon icon={theIcon} className="mr-2 text-2xl hover:text-orange" />
);

const GenderOption = ({ label, selectedGender, onClick }) => (
  <span
    onClick={() => onClick(label)}
    className={`${selectedGender === label ? "text-[black]" : "text-[gray]"} hover:texy-[black] cursor-pointer`}
  >
    {label}
  </span>
);
export default function Header({ setGender, gender }) {
  const handleChooseGender = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <>
      <section className="flex h-9 w-full flex-row items-center justify-between">
        <div className="w-[40%]">
          <img src={mainLogo} alt="logo!" className="h-9 w-44 cursor-pointer" />
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
          label="Woman"
          selectedGender={gender}
          onClick={handleChooseGender}
        />
        <GenderOption
          label="Men"
          selectedGender={gender}
          onClick={handleChooseGender}
        />
        <GenderOption
          label="Kids"
          selectedGender={gender}
          onClick={handleChooseGender}
        />
      </section>
      <hr className="w-full text-[#eee]" />
    </>
  );
}
