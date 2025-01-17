import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
// assetes
import Logo from "../assets/imgs/iconLogo.png";
// components
import UserPopup from "./UserPopup";
import SearchBar from "../features/products/SearchBar";

const SvgIcon = ({ theIcon }) => (
  <Icon icon={theIcon} className="mr-2 text-2xl hover:text-orange" />
);

const GenderOption = ({ label, selectedType, onClick }) => (
  <span
    onClick={() => onClick(label)}
    className={`${
      selectedType === label ? "text-[black]" : "text-[gray]"
    } cursor-pointer uppercase hover:text-orange`}
  >
    {label}
  </span>
);

const TypeOption = ({ label, selectedType, onClick }) => (
  <span
    onClick={() => onClick(label)}
    className={`${selectedType === label ? "text-[black]" : "text-[gray]"} cursor-pointer font-semibold uppercase hover:text-orange`}
  >
    {label}
  </span>
);

export default function Header({
  setType,
  type,
  allProducts,
  searchResult,
  setSearchResult,
}) {
  const [searchType, setSearchType] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const userPopupRef = useRef(null);
  const buttonRef = useRef(null);

  const handleChooseGender = (selectedType) => {
    setType(selectedType);
  };

  const handleSearchType = (selectedType) => {
    setSearchType(selectedType);
  };

  const toggleUserPopup = () => {
    setIsUserPopupOpen((prev) => !prev);
  };

  // function to close the popop whenever the user clicks anywhere on screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!buttonRef.current.contains(event.target)) {
        setIsUserPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="pt-4 md:px-8 md:py-4 lg:px-14">
      {/* first header for large screeens */}

      <section className="hidden items-center justify-between gap-4 md:flex md:gap-0">
        <div className="flex w-full items-center md:w-1/3">
          <NavLink to={"/"} className="flex items-center">
            <img
              src={Logo}
              alt="logo!"
              className="h-10 w-12 cursor-pointer md:h-12 md:w-16"
            />
            <div className="ml-4 bg-gradient-to-r from-[#d62828] to-[#fcbf49] bg-clip-text text-lg font-bold text-[transparent] md:text-lg lg:text-xl">
              <span>Wessam & Firas</span>
              <br />
              <span className="block md:inline"> FASHION</span>
            </div>
          </NavLink>
        </div>

        <div className="w-full items-center justify-center space-x-2 text-sm md:flex md:w-1/3 md:text-base lg:space-x-4">
          <p className="flex cursor-pointer items-center gap-1 hover:text-orange">
            <SvgIcon theIcon="material-symbols:headset-mic-outline-sharp" />
            Support
          </p>
          <p className="flex cursor-pointer items-center gap-1 hover:text-orange">
            <SvgIcon theIcon="hugeicons:location-09" />
            Find a store
          </p>
        </div>

        <div className="flex w-full justify-center gap-4 text-lg md:w-1/3 md:justify-end">
          <span className="cursor-pointer">
            <SvgIcon theIcon="mdi:heart-outline" />
          </span>

          <div className="relative" ref={buttonRef}>
            <div
              onClick={() => {
                toggleUserPopup();
              }}
              className="cursor-pointer"
            >
              <SvgIcon theIcon="iconamoon:profile" />
            </div>

            {isUserPopupOpen && <UserPopup isUserPopupOpen={isUserPopupOpen} />}
          </div>

          <span className="cursor-pointer">
            <SvgIcon theIcon="ic:outline-local-grocery-store" />
          </span>
        </div>
      </section>

      {/* first header for small and  screeens */}

      <section className="flex items-center justify-between md:hidden">
        <div className="flex w-full items-center md:w-1/3">
          <NavLink to={"/"} className="flex items-center">
            <img
              src={Logo}
              alt="logo!"
              className="h-10 w-12 cursor-pointer md:h-12 md:w-16"
            />
            <div className="ml-4 bg-gradient-to-r from-[#d62828] to-[#fcbf49] bg-clip-text text-xs font-bold text-[transparent]">
              <span>Wessam & Firas</span>
              <br />
              <span className="block md:inline"> FASHION</span>
            </div>
          </NavLink>
        </div>

        <div className="flex items-center justify-center space-x-4 pr-4 text-sm">
          <div className="relative" ref={buttonRef}>
            <div
              className="flex cursor-pointer flex-col items-center justify-center gap-1"
              onClick={toggleUserPopup}
            >
              <SvgIcon theIcon="iconamoon:profile" />
              <p> Accounts</p>
            </div>
            {isUserPopupOpen && <UserPopup isUserPopupOpen={isUserPopupOpen} />}
          </div>

          <p className="flex cursor-pointer flex-col items-center gap-1">
            <SvgIcon theIcon="hugeicons:location-09" />
            Stores
          </p>

          <span className="flex cursor-pointer flex-col items-center gap-1">
            <SvgIcon theIcon="ic:outline-local-grocery-store" />
            Cart
          </span>
        </div>
      </section>

      {/* end first header */}

      {/* secnond header */}

      <div className="text-gray-500 mt-6 hidden flex-wrap gap-2 overflow-x-auto text-sm font-medium md:flex md:flex-nowrap md:gap-4 md:text-base">
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
        <GenderOption
          label="living"
          selectedType={type}
          onClick={handleChooseGender}
        />
        <GenderOption
          label="bathroom"
          selectedType={type}
          onClick={handleChooseGender}
        />
      </div>

      {/* end second header for small and mid screens  */}

      <hr className="w-full text-[#eee]" />

      <section className="flex h-full w-full items-center justify-between md:h-20">
        <div className="hidden w-[30%] space-x-4 md:flex md:items-center">
          <TypeOption
            label="sale"
            onClick={handleSearchType}
            selectedType={searchType}
          />
          <TypeOption
            label="new in"
            onClick={handleSearchType}
            selectedType={searchType}
          />
          <TypeOption
            label="brands"
            onClick={handleSearchType}
            selectedType={searchType}
          />
        </div>
        <div
          className="flex h-[40px] w-[20%] cursor-pointer items-center justify-center border-2 border-b-0 border-l-0 border-r-0 border-[#eee] md:hidden"
          onClick={() => setMobileMenu(true)}
        >
          <Icon icon={"stash:burger-classic"} className="mr-1 text-xl" />
          <span className="text-xs">MENU</span>
        </div>
        {/* search bar */}
        <SearchBar
          allProducts={allProducts}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          type={type}
          searchType={searchType}
        />
      </section>
      <div
        id="blur_back_ground"
        className={`${mobileMenu ? "block" : "hidden"} fixed left-0 top-0 z-50 h-screen w-screen bg-[#ddd] opacity-50 backdrop-blur-2xl`}
      ></div>
      <div
        id="mobile menu"
        className={`${mobileMenu ? "h-screen w-[75%] p-6" : "h-0 w-0"} fixed left-0 top-0 z-50 flex h-screen flex-col overflow-hidden bg-[white] duration-300 md:hidden`}
      >
        <p
          className="cursor-pointer self-end text-4xl hover:text-orange"
          onClick={() => setMobileMenu(false)}
        >
          <Icon icon={"formkit:close"} />
        </p>
        <p className="self-center text-4xl text-[gray]">Filter Type</p>
        <hr className="my-4" />
        <div
          className="mb-4 flex cursor-pointer flex-col space-y-4 text-2xl font-semibold"
          onClick={() => setMobileMenu(false)}
        >
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
          <GenderOption
            label="living"
            selectedType={type}
            onClick={handleChooseGender}
          />
          <GenderOption
            label="bathroom"
            selectedType={type}
            onClick={handleChooseGender}
          />
          <TypeOption
            label="sale"
            onClick={handleSearchType}
            selectedType={searchType}
          />
          <TypeOption
            label="new in"
            onClick={handleSearchType}
            selectedType={searchType}
          />
          <TypeOption
            label="brands"
            onClick={handleSearchType}
            selectedType={searchType}
          />
        </div>
        <hr className="my-2" />
        <p className="mb-4 self-center text-4xl text-[gray]">Qucick Access</p>
        <button className="mx-auto mb-8 flex h-10 w-[80%] items-center justify-center border text-[#777] hover:border-orange hover:text-orange">
          <SvgIcon theIcon="hugeicons:location-09" />
          Store Locator
        </button>
        <p
          className="mb-4 flex cursor-pointer items-center text-2xl font-semibold text-[gray] hover:text-orange"
          onClick={toggleUserPopup}
          // ref={userPopupRef}
        >
          <SvgIcon theIcon="iconamoon:profile" />
          {/* {isUserPopupOpen && <UserPopup />} */}
          Account
        </p>
        <p className="flex cursor-pointer items-center text-2xl font-semibold text-[gray] hover:text-orange">
          <SvgIcon theIcon="ph:question" />
          FAQS
        </p>
      </div>
    </div>
  );
}
