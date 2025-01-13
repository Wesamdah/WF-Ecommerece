import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  getCurrentUser,
  selectAuthError,
  selectAuthStatus,
  selectCurrentUser,
} from "../features/auth/authSlice";
import { showPopup } from "../features/popup/popupSlice";
// assets
import Logo from "../assets/imgs/logo.png";
import image2 from "../assets/imgs/image2.png";
import { Icon } from "@iconify/react/dist/iconify.js";
// components
import Inputs from "../components/Inputs";

const SvgIcon = ({ theIcon }) => <Icon icon={theIcon} className="text-3xl" />;

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);
  const currentUser = useSelector(selectCurrentUser);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isDelayed, setIsDelayed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (authStatus === "succeeded" && !authError) {
      setIsDelayed(true);
      setTimeout(() => {
        setIsDelayed(false);
        navigate(from, { replace: true });
      }, 3000);
    }

    if (authStatus === "failed" && authError) {
      setIsDelayed(true);
      setTimeout(() => {
        setIsDelayed(false);
        dispatch(
          showPopup({ message: authError.msg || authError, type: "error" }),
        );
      }, 3000);
    }
  }, [authStatus, authError, navigate, from]);

  useEffect(() => {
    if (currentUser) {
      navigate(from, { replace: true });
    } else {
      dispatch(getCurrentUser());
    }
  }, []);

  const canSubmit = [...Object.values(data)].every(Boolean);

  return (
    <main className="relative flex h-screen w-screen flex-col-reverse overflow-hidden bg-orange md:flex-row md:justify-between">
      <section className="flex h-[calc(100%_-_124px)] w-full flex-col items-center justify-center overflow-hidden rounded-t-[30px] bg-[white] p-4 sm:p-6 md:h-full md:w-[60%] md:animate-loadForm md:items-start md:rounded-r-[30px] md:rounded-tl-none md:p-8 lg:h-full">
        <p className="mb-4 text-xl font-semibold text-[#525252] sm:text-2xl md:text-3xl">
          Login{" "}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col p-4 md:p-8"
        >
          <Inputs
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={data.email}
            setData={setData}
          />
          <Inputs
            name={"password"}
            type="password"
            placeholder="Enter Password"
            value={data.password}
            setData={setData}
          />
          <button
            type="submit"
            disabled={!canSubmit}
            className="flex h-14 items-center justify-center rounded-lg bg-orange text-xl font-semibold text-[white]"
          >
            {authStatus === "loading" || isDelayed ? (
              <SvgIcon theIcon="svg-spinners:180-ring-with-bg" />
            ) : (
              <p>Login</p>
            )}
          </button>
        </form>
        <p className="px-8 text-sm text-[#A1A1A1]">
          {" "}
          Don't have account?{" "}
          <Link to={"/signup"} className="font-bold text-orange">
            Create Account
          </Link>
        </p>
      </section>

      <section className="m-2 flex h-fit w-full flex-col justify-center overflow-hidden text-center sm:m-4 md:m-10 md:mx-auto md:h-full md:w-[40%] md:justify-normal md:pl-2 md:font-bold lg:w-[30%] lg:text-start lg:text-xl">
        <div className="mb-2 flex flex-row items-center justify-center sm:mb-4 md:mb-6 md:justify-start">
          <img
            src={Logo}
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-40 md:w-40"
            alt="Logo"
          />
          <p className="text-2xl font-bold text-[#ffffff] sm:text-4xl md:text-xl lg:text-2xl">
            WF Store
          </p>
        </div>

        <div className="sm:block">
          <p className="mb-4 hidden text-xl font-bold text-[#ffffff] sm:text-2xl md:block md:text-3xl xl:text-4xl">
            E-Commerce Store
          </p>
          <p className="text-sm text-[#ffffff] sm:text-lg md:text-xl lg:text-xl">
            Discover the best deals and shop your favorites all in one place!
          </p>
        </div>
      </section>
      <img
        src={image2}
        className="absolute -bottom-6 right-[0%] hidden h-[300px] w-[300px] animate-loadImage delay-500 md:block lg:h-[400px] lg:w-[400px] xl:right-[10%]"
      />
    </main>
  );
}
