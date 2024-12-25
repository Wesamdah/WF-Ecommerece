import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
// imgs
import firstResult from "../../assets/imgs/quick11.jpg";
import secondResult from "../../assets/imgs/quick22.jpg";
import thirdResult from "../../assets/imgs/quick3.jpg";

export default function ProductSearchBar({
  allProducts,
  type,
  setSearchResult,
}) {
  const [activeSeacrch, setActiveSearch] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [valueOfInput, setValueOfInput] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const typeResults = type
    ? allProducts.filter((product) => product.category.includes(type))
    : allProducts;

  let searchTypeResults = "";

  switch (searchType) {
    case "sale":
      searchTypeResults = typeResults.filter((result) => result.atSale);
      break;
    case "new in":
      searchTypeResults = typeResults.filter((result) => result.newArrivels);
      break;
    default:
      searchTypeResults = typeResults;
  }

  const TypeOption = ({ label, selectedType, onClick }) => (
    <span
      onClick={() => onClick(label)}
      className={`${selectedType === label ? "text-[black]" : "text-[gray]"} cursor-pointer font-semibold uppercase hover:text-orange`}
    >
      {label}
    </span>
  );

  const handleSearchType = (selectedType) => {
    setSearchType(selectedType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let resutArray = "";
    if (!e.target.value && !searchType) return setSearchResult(allProducts);
    if (searchType === "brands") {
      resutArray = typeResults.filter((result) =>
        result.company.includes(e.target.value),
      );
    } else {
      resutArray = searchTypeResults.filter(
        (product) =>
          product.name.includes(e.target.value) ||
          product.description.includes(e.target.value),
      );
    }
    setSearchResult(resutArray);

    if (!valueOfInput.trim()) return;

    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      if (updatedSearches.length >= 6) {
        updatedSearches.shift();
      }
      updatedSearches.push(valueOfInput);
      return updatedSearches;
    });
  };

  const handleChange = (e) => {
    setValueOfInput(e.target.value);
  };

  return (
    <section className="flex h-20 w-full items-center justify-between px-14">
      <div className="felx w-[30%] justify-between space-x-4">
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
      <div className="relative flex w-[70%] justify-end">
        <form
          onSubmit={handleSubmit}
          className={`${activeSeacrch ? "w-full" : "w-96"} relative h-10 duration-300`}
        >
          <input
            type="text"
            id="search"
            className="relative h-full w-full border-2 border-[#eee] p-3 pl-9 font-light caret-orange outline-none focus:border-2 focus:border-orange focus:font-normal"
            placeholder="Search products, articles, faq, ..."
            onClick={() => setActiveSearch(!activeSeacrch)}
            onChange={handleChange}
            autoComplete="off"
            aria-label="Search"
          />
          <Icon
            icon={"lucide:search"}
            className="text- absolute left-2 top-1/2 -translate-y-1/2 text-2xl"
            aria-hidden="true"
          />
          <button
            type="submit"
            className={`${activeSeacrch ? "block" : "hidden"} absolute right-5 top-1/2 flex h-7 w-24 -translate-y-1/2 items-center justify-center bg-orange p-2 text-[white]`}
          >
            Search
          </button>
        </form>
        <div
          id="drop_down"
          className={`absolute top-[60px] z-10 flex drop-shadow-[0_8px_16px_rgba(35,38,59,1)] ${activeSeacrch ? "h-96" : "h-0"} w-full overflow-hidden bg-[white] duration-300`}
        >
          <div className="w-1/3 p-5">
            <p className="mb-2 text-[#777]">Recent searches</p>
          </div>
          <div className="w-2/3 p-5">
            <p className="mb-2 text-[#777]">Quick access</p>
            <div className="flex h-full w-full cursor-pointer gap-2">
              <div className="group relative h-[90%] w-[33%]">
                <img
                  className="h-full w-full object-cover"
                  src={firstResult}
                  alt="First Result"
                />
                <div className="absolute bottom-0 flex h-0 w-full flex-col items-center justify-center overflow-hidden bg-orange text-[white] transition-all duration-300 group-hover:h-20">
                  <p>Spring Sale</p>
                  <p>Up to 60% off</p>
                </div>
              </div>

              <div className="group relative h-[90%] w-[33%]">
                <img
                  className="h-full w-full object-cover"
                  src={secondResult}
                  alt="Second Result"
                />
                <div className="absolute top-0 flex h-0 w-full flex-col items-center justify-evenly overflow-hidden bg-[transparent] font-bold text-[white] transition-all duration-300 group-hover:h-full [&_p]:text-center">
                  <p>Till March 25th</p>
                  <p>
                    Sale on
                    <br />
                    Sneakers
                  </p>
                  <p>20% Off</p>
                </div>
              </div>
              <div className="group relative h-[90%] w-[33%] overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={thirdResult}
                  alt="Third Result"
                />
                <div className="absolute left-[-200px] top-0 flex h-full w-full flex-col items-center justify-center bg-[transparent] font-bold text-[white] transition-all duration-300 group-hover:left-0 [&_p]:text-center">
                  <p>
                    NEW
                    <br />
                    COLLECTION
                  </p>
                  <p className="text-sm font-normal">
                    SPRING/SUMMER <br /> 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
