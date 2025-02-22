import React from "react";
// assets
import { Icon } from "@iconify/react/dist/iconify.js";
import firstResult from "../../assets/imgs/quick1.jpg";
import secondResult from "../../assets/imgs/quick2.jpg";
import thirdResult from "../../assets/imgs/quick3.jpg";
// components
import ProductCard from "../../components/ProductCard";

export default function ProductSearchBar({
  searchResult,
  recentSearches,
  SvgIcon,
  setRecentSearches,
  valueOfInput,
  setValueOfInput,
}) {
  const popularSearches = [
    "low sneakers",
    "nike leather",
    "causal footwear",
    "adidas amba",
    "yeezys",
  ];

  const deleteRecnetValue = (index) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      return updatedSearches.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      {searchResult.length > 0 && valueOfInput ? (
        <div className="h-fit p-4 md:w-full">
          <div className="mb-4 flex items-center">
            <p className="text-[#91929D]">Products</p>
            {SvgIcon}
          </div>
          {/* Desktop View */}
          <div className="mb-3 hidden h-[calc(100%_-_68px)] w-full items-start gap-2 md:flex">
            {searchResult.slice(0, 5).map((product, index) => (
              <ProductCard key={index} item={product} />
            ))}
          </div>

          {/* Mobile View */}
          <div className="flex h-[calc(100%_-_68px)] w-full flex-wrap items-start gap-2 md:hidden">
            {searchResult.slice(0, 5).map((product, index) => (
              <ProductCard key={index} item={product} />
            ))}
          </div>

          {searchResult.length > 4 && (
            <div className="flex h-8 w-fit cursor-pointer items-center justify-center bg-primary-black px-4 py-1 text-sm font-light text-[white] md:flex">
              <p>See All Products ({searchResult.length - 6})</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="mb-1 w-full p-5 md:w-1/3">
            <div
              id="recent_searches"
              className={`${recentSearches.length > 0 ? "block" : "hidden"} mb-4 h-fit max-h-[60%] w-full space-y-3`}
            >
              <p className="mb-2 text-[#777] md:text-sm lg:text-base">
                Recent searches
              </p>
              {recentSearches.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <Icon
                    icon={"mdi:reload"}
                    className="w-[15%] cursor-pointer"
                  />
                  <p
                    className="w-[70%] cursor-pointer self-start md:text-sm lg:text-base"
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
              <p className="mb-2 text-[#777] md:text-sm lg:text-base">
                Popular Searches
              </p>
              <div className="scrollbar-transparent flex overflow-y-hidden overflow-x-scroll md:flex-wrap md:items-center md:overflow-hidden">
                {popularSearches.map((item, index) => (
                  <div
                    key={index}
                    className="m-1 h-fit w-fit cursor-pointer rounded-[4px] border border-[#D3D4D8] bg-[#F4F4F5] p-1 md:px-3 lg:text-base lg:font-medium"
                  >
                    <p
                      className="w-[120px] text-center md:w-fit md:text-sm lg:text-base"
                      onClick={() => setValueOfInput(item)}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="scrollbar-transparent w-full overflow-x-scroll p-5 md:w-2/3 md:overflow-hidden">
            <div className="flex w-full justify-between">
              <p className="mb-2 text-[#777]">Quick access</p>
              <p className="hidden md:block">{SvgIcon}</p>
            </div>

            <div className="flex h-full w-fit cursor-pointer gap-2 md:w-full">
              <div className="md:[33%] group relative h-[300px] w-[200px] md:h-[90%]">
                <img
                  src={firstResult}
                  alt="First Result"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 flex h-10 w-full flex-col items-center justify-center overflow-hidden bg-orange text-xs text-[white] transition-all duration-300 md:h-0 md:text-base md:group-hover:h-20">
                  <p>Spring Sale</p>
                  <p>Up to 60% off</p>
                </div>
              </div>
              <div className="md:[33%] group relative h-[300px] w-[200px] md:h-[90%]">
                <img
                  className="h-full w-full object-cover"
                  src={secondResult}
                  alt="Second Result"
                />
                <div className="absolute top-0 flex h-full w-full flex-col items-center justify-evenly overflow-hidden bg-[transparent] text-xs font-bold text-[white] transition-all duration-300 md:h-0 md:text-base md:group-hover:h-full [&_p]:text-center">
                  <p>Till March 25th</p>
                  <p>
                    Sale on
                    <br />
                    Sneakers
                  </p>
                  <p>20% Off</p>
                </div>
              </div>
              <div className="md:[33%] group relative h-[300px] w-[200px] md:h-[90%] md:overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={thirdResult}
                  alt="Third Result"
                />
                <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-[transparent] text-xs font-bold text-[white] transition-all duration-300 md:left-[-200px] md:text-base md:group-hover:left-0 [&_p]:text-center">
                  <p>
                    NEW
                    <br />
                    COLLECTION
                  </p>
                  <p className="font-normal md:text-sm">
                    SPRING/SUMMER <br /> 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
