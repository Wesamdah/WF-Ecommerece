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

  const [gender, setGender] = useState("office");

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, allProducts.length]);

  return (
    <div className="h-screen w-screen bg-[white] px-14 py-8">
      <Header setGender={setGender} gender={gender} />
      <ProductSearchBar />

      <Outlet />
    </div>
  );
}
