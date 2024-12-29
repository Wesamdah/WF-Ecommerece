import { useEffect, useState } from "react";
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
import {
  getCurrentUser,
  selectCurrentUser,
} from "../../features/auth/authSlice";

export default function UserLayout() {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const user = useSelector(selectCurrentUser);

  const [type, setType] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, allProducts.length]);

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-[white]">
      <Header setType={setType} type={type} />
      <ProductSearchBar
        allProducts={allProducts}
        setSearchResult={setSearchResult}
        type={type}
      />
      <Outlet />
    </div>
  );
}
