import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  selectAuthError,
  selectAuthStatus,
} from "../features/auth/authSlice";
// images
import Logo from "../assets/imgs/logo.png";
import image2 from "../assets/imgs/image2.png";
// components
import Inputs from "../components/Inputs";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (authStatus === "succeeded" && !authError) {
      navigate(from, { replace: true });
      // navigate("/");
    }
  }, [authStatus, authError, navigate]);

  const canSubmit = [...Object.values(data)].every(Boolean);

  return (
    <main className="relative flex h-screen w-screen overflow-hidden bg-orange md:justify-between">
      <section className="boder flex h-full w-[60%] animate-loadForm flex-col items-start justify-center rounded-r-[30px] bg-[white] p-20">
        <p className="px-8 text-3xl font-semibold text-[#525252]">Login </p>
        <form onSubmit={handleSubmit} className="flex w-[100%] flex-col p-8">
          <Inputs
            name={"email"}
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
            className="h-14 rounded-lg bg-orange text-xl font-semibold text-[white]"
          >
            Login
          </button>
        </form>
        {authStatus === "loading" && <p>Logging in...</p>}
        {authStatus === "failed" && <p>Error: {authError}</p>}
        <p className="px-8 text-sm text-[#A1A1A1]">
          {" "}
          Don't have account?{" "}
          <Link to={"/signup"} className="font-bold text-orange">
            Create Account
          </Link>
        </p>
      </section>
      <section className="m-10 flex h-full w-[30%] flex-col overflow-hidden">
        <img src={Logo} className="h-20 w-20" />
        <p className="mt-10 text-2xl font-bold text-[#ffffff]">WF E-Store</p>
        <p className="mb-8 text-4xl font-bold text-[#ffffff]">
          {" "}
          E-Commerce Store
        </p>
        <p className="text-lg text-[#ffffff]">
          Discover the best deals and shop your favorites,
          <br />
          all in one place!
        </p>
      </section>
      <img
        src={image2}
        className="absolute bottom-0 right-[10%] h-[400px] w-[400px] animate-loadImage delay-500"
      />
    </main>
  );
}
