import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// redux
import {
  fetchAllProducts,
  selectAllProducts,
} from "../../features/products/productsSlice";
import {
  getCurrentUser,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
// component
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDropMenu } from "../../provider/DropMenuProvider";

export default function UserLayout() {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const user = useSelector(selectCurrentUser);
  const { isSearchActive } = useDropMenu();

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
  }, []);

  return (
    <div
      className={`${isSearchActive ? "overflow-y-hidden" : "overflow-y-scroll"} h-screen w-screen overflow-x-hidden bg-[white] md:overflow-y-scroll`}
    >
      <Header
        setType={setType}
        type={type}
        allProducts={allProducts}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
