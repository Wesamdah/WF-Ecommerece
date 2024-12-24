import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

export default function ProductSearchBar({
  allProducts,
  type,
  setSearchResult,
}) {
  const [activeSeacrch, setActiveSearch] = useState(false);
  const [searchType, setSearchType] = useState("");

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
  };

  const handleChange = (e) => {
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
  };

  return (
    <section className="flex h-20 w-full items-center justify-between px-14">
      <div className="felx w-1/3 justify-between space-x-4">
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
      <div className="relative flex w-2/3 justify-end">
        <form
          onSubmit={handleSubmit}
          className={`${activeSeacrch ? "w-full" : "w-96"} relative h-10 duration-300`}
        >
          <input
            type="text"
            id="search"
            className="relative h-full w-full border-2 border-[#eee] p-3 pl-9 font-light caret-orange outline-none focus:border-2 focus:border-orange focus:font-normal"
            placeholder="Search products, articles, faq, ..."
            onClick={() => setActiveSearch(true)}
            onBlur={() => setActiveSearch(false)}
            onChange={handleChange}
          />
          <Icon
            icon={"lucide:search"}
            className="text- absolute left-2 top-1/2 -translate-y-1/2 text-2xl"
          />
          <button
            className={`${activeSeacrch ? "block" : "hidden"} absolute right-5 top-1/2 flex h-7 w-24 -translate-y-1/2 items-center justify-center bg-orange p-2 text-[white]`}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
