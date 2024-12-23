import { Router, Routes, Route } from "react-router-dom";
// layouts
import SignUp from "./layout/SignUp";
import SignIn from "./layout/SignIn";
import PublicLayout from "./layout/PublicLayout";
import Welcome from "./components/Welcome";
import RequireAuth from "./utils/requireAuth";
import UserInfo from "./components/UserInfo";
// components
import UserLayout from "./layout/userLayout/UserLayout";
import ProductsList from "./features/products/ProductsList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicLayout />}>
          <Route index element={<Welcome />} />
          <Route element={<RequireAuth />}>
            <Route path="userInfo" element={<UserInfo />} />
          </Route>
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/main" element={<UserLayout />}>
          <Route index element={<ProductsList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
