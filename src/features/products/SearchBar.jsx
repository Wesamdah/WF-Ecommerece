import React, { useEffect, useState } from "react";
// assets
import { Icon } from "@iconify/react/dist/iconify.js";
// components
import ProductSearchBar from "./ProductSearchBar";
import { useDropMenu } from "../../provider/DropMenuProvider";

export default function SearchBar({
  allProducts,
  type,
  searchResult,
  setSearchResult,
  searchType,
}) {
  const { isSearchActive, setIsSearchActive } = useDropMenu();
  const [valueOfInput, setValueOfInput] = useState("");
  const [recentSearches, setRecentSearches] = useState(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    return storedSearches ? JSON.parse(storedSearches) : [];
  });

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

  const SvgIcon = () => (
    <Icon
      icon={"proicons:cancel"}
      className="ml-auto cursor-pointer items-center text-xl font-semibold hover:text-orange"
      onClick={() => {
        setIsSearchActive(false);
        setValueOfInput("");
        setSearchResult([]);
      }}
    />
  );

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
      if (prevSearches.includes(valueOfInput)) return prevSearches;
      const updatedSearches = [...prevSearches, valueOfInput];
      return updatedSearches.slice(-4); // Keep only the last 6 searches
    });
  };

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  return (
    <div className="relative z-50 flex w-full justify-end md:w-[70%]">
      <form
        onSubmit={handleSubmit}
        className={`w-full md:${isSearchActive ? "w-full" : "w-96"} relative h-10 duration-300`}
      >
        <input
          type="text"
          id="search"
          className="relative h-full w-full border-2 border-b-0 border-[#eee] p-3 pl-9 font-light caret-orange outline-none focus:border-2 focus:font-normal md:border-b-2 md:focus:border-orange"
          placeholder="Search products, articles, faq, ..."
          value={valueOfInput}
          onClick={() => setIsSearchActive(true)}
          onChange={handleChange}
          autoComplete="off"
          aria-label="Search"
        />
        <Icon
          icon={"lucide:search"}
          className="text- absolute left-2 top-1/2 hidden -translate-y-1/2 text-2xl md:block"
          aria-hidden="true"
        />
        <Icon
          icon={isSearchActive ? "mingcute:arrow-left-line" : "lucide:search"}
          className="text- absolute left-2 top-1/2 -translate-y-1/2 text-2xl md:hidden"
          aria-hidden="true"
          onClick={() => setIsSearchActive(false)}
        />
        <button
          type="submit"
          className={`hidden md:${isSearchActive ? "block" : "hidden"} absolute right-5 top-1/2 flex h-7 w-24 -translate-y-1/2 items-center justify-center bg-orange text-[white]`}
        >
          Search
        </button>
      </form>

      <div
        id="drop_down"
        className={`z-50 w-screen overflow-hidden overflow-y-scroll bg-[white] duration-300 md:top-[60px] md:flex md:w-full md:overflow-hidden md:drop-shadow-[0_8px_16px_rgba(35,38,59,1)] ${isSearchActive ? (searchResult.length > 0 && valueOfInput ? "h-[calc(100vh_-_104px)] md:h-[456px]" : "h-[calc(100vh_-_104px)] md:h-[450px]") : "h-0"} fixed top-[104px] md:absolute md:flex md:drop-shadow-[0_8px_16px_rgba(35,38,59,1)]`}
      >
        <ProductSearchBar
          searchResult={searchResult}
          recentSearches={recentSearches}
          SvgIcon={<SvgIcon />}
          setRecentSearches={setRecentSearches}
          setValueOfInput={setValueOfInput}
          valueOfInput={valueOfInput}
        />
      </div>
    </div>
  );
}
