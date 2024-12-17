import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const PublicLayout = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <>
      <header className="flex h-16 w-full items-center justify-between bg-primary-black p-8 text-[#ffffff]">
        <h1 className="bg-primary-black text-[#ffffff]">E-Commerce Store</h1>
        <div className="flex flex-row gap-7">
          <NavLink to="/">
            <button className="h-8 w-20 rounded-md bg-orange text-[#ffffff]">
              Home
            </button>
          </NavLink>

          <NavLink to="userInfo">
            <button className="h-8 w-20 rounded-md bg-orange text-[#ffffff]">
              User Info
            </button>
          </NavLink>

          <NavLink to="/signin">
            <button className="h-8 w-20 rounded-md bg-orange text-[#ffffff]">
              Login
            </button>
          </NavLink>

          <button
            className="h-8 w-20 rounded-md bg-orange text-[#ffffff]"
            onClick={handleLogout}
          >
            logout
          </button>
        </div>
      </header>
      <div className="h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
    </>
  );
};

export default PublicLayout;
