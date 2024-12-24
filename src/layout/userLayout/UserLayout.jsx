import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// redux
import {
  fetchAllProducts,
  selectAllProducts,
} from "../../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
// component
import Header from "../../components/Header";
import ProductSearchBar from "../../features/products/ProductSearchBar";

export default function UserLayout() {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);

  // console.log(allProducts.filter((product) => product.category === "kitchen"));

  const [type, setType] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, allProducts.length]);

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-[white] px-14 py-8">
      <Header setType={setType} type={type} />
      <ProductSearchBar
        allProducts={allProducts}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        type={type}
      />
      <Outlet />
    </div>
  );
}
