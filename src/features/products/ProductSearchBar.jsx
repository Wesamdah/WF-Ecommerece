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

  const popularSearches = [
    "low sneakers",
    "nike leather",
    "causal footwear",
    "adidas amba",
    "yeezys",
  ];

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

  const handleChange = (e) => {
    setValueOfInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!valueOfInput) {
      if (!searchType) {
        setSearchResult(allProducts);
      }
      return;
    }

    const resultArray =
      searchType === "brands"
        ? typeResults.filter((result) => result.company.includes(valueOfInput))
        : searchTypeResults.filter(
            (product) =>
              product.name.includes(valueOfInput) ||
              product.description.includes(valueOfInput),
          );

    setSearchResult(resultArray);

    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches, valueOfInput];
      return updatedSearches.slice(-4); // Keep only the last 6 searches
    });
  };

  const deleteRecnetValue = (index) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      return updatedSearches.filter((_, i) => i !== index);
    });
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
            value={valueOfInput}
            onClick={() => setActiveSearch(true)}
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
          <div className="mb-1 w-1/3 p-5">
            <div
              id="recent_searches"
              className={`${recentSearches.length > 0 ? "block" : "hidden"} h-fit max-h-[60%] w-full`}
            >
              <p className="mb-2 text-[#777]">Recent searches</p>
              {recentSearches.map((item, index) => (
                <div
                  key={index}
                  className="mb-5 flex items-center justify-between"
                >
                  <Icon
                    icon={"mdi:reload"}
                    className="w-[15%] cursor-pointer"
                  />
                  <p
                    className="w-[70%] cursor-pointer self-start"
                    onClick={() => setValueOfInput(item)}
                  >
                    {item}
                  </p>
                  <Icon
                    icon={"proicons:cancel"}
                    className="w-[15%] cursor-pointer"
                    onClick={() => deleteRecnetValue(index)}
                  />
                </div>
              ))}
            </div>
            <div id="Popular_searches" className="h-[40%] w-full">
              <p className="mb-2 text-[#777]">Popular Searches</p>
              <div className="flex flex-wrap items-center">
                {popularSearches.map((item, index) => (
                  <div
                    key={index}
                    className="m-1 h-8 w-fit cursor-pointer rounded-[4px] border border-[#D3D4D8] bg-[#F4F4F5] p-1 px-3 text-center font-medium"
                  >
                    <p onClick={() => setValueOfInput(item)}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-2/3 p-5">
            <div className="flex w-full">
              <p className="mb-2 text-[#777]">Quick access</p>
              <Icon
                icon={"proicons:cancel"}
                className="ml-auto cursor-pointer items-center text-xl font-semibold hover:text-orange"
                onClick={() => setActiveSearch(false)}
              />
            </div>

            <div className="flex h-full w-full cursor-pointer gap-2">
              <div className="group relative h-[90%] w-[33%]">
                <img
                  src={firstResult}
                  alt="First Result"
                  className="h-full w-full object-cover"
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
