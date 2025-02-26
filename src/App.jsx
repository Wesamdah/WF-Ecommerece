import { HashRouter as Router, Routes, Route } from "react-router-dom";

// layouts
import SignUp from "./layout/SignUp";
import SignIn from "./layout/SignIn";
import UserLayout from "./layout/userLayout/UserLayout";
// pages
import ProductsList from "./features/products/ProductsList";
import InfoPopup from "./features/popup/InfoPopup";
import Verify from "./components/Verify";
import DropMenuProvider from "./provider/DropMenuProvider";

function App() {
  return (
    <>
      <InfoPopup />
      <Routes>
        <Route
          path="/*"
          element={
            <DropMenuProvider>
              <UserLayout />
            </DropMenuProvider>
          }
        >
          <Route index element={<ProductsList />} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user/verify-email" element={<Verify />} />
      </Routes>
    </>
  );
}

export default App;
