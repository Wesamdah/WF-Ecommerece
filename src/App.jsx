import { Router, Routes, Route } from "react-router-dom";
// layouts
import SignUp from "./layout/SignUp";
import SignIn from "./layout/SignIn";
import UserLayout from "./layout/userLayout/UserLayout";
// pages
import ProductsList from "./features/products/ProductsList";
import InfoPopup from "./features/popup/InfoPopup";

function App() {
  return (
    <>
      <InfoPopup />
      <Routes>
        <Route path="/*" element={<UserLayout />}>
          <Route index element={<ProductsList />} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
