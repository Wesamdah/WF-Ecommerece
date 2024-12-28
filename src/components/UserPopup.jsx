// assets
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "../assets/imgs/iconLogo.png";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, logoutUser } from "../features/auth/authSlice";
import { NavLink } from "react-router-dom";

const SvgIcon = ({ theIcon }) => (
  <Icon icon={theIcon} className="mr-2 text-2xl hover:text-orange" />
);

const UserPopup = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div className="absolute right-[-6px] top-9 z-10 flex w-36 flex-col items-center gap-2 rounded-xl border-2 border-solid border-orange bg-[#ffffff] p-5">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="" className="mr-2 h-6 w-6" />{" "}
          {user ? user.name : "Guest"}
        </div>
        <hr class="my-3 h-[2px] w-32 border-0 bg-[gray]" />
      </div>
      <ul className="flex flex-col gap-4">
        {user && (
          <li className="flex cursor-pointer flex-row items-center hover:text-orange">
            <SvgIcon theIcon="iconamoon:profile" />
            Profile
          </li>
        )}
        {user ? (
          <li
            className="flex cursor-pointer flex-row items-center hover:text-orange"
            onClick={handleLogout}
          >
            {" "}
            <SvgIcon theIcon="si:sign-out-duotone" />
            Sign out
          </li>
        ) : (
          <NavLink to="/signin">
            <li className="flex cursor-pointer flex-row items-center hover:text-orange">
              {" "}
              <SvgIcon theIcon="solar:login-2-linear" />
              Login
            </li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default UserPopup;
