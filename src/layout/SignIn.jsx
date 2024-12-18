import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  selectAuthError,
  selectAuthStatus,
} from "../features/auth/authSlice";
// images
import Logo from "../assets/imgs/logo.png";
import tube3d from "../assets/imgs/tube3d.png";
// components
import Inputs from "../components/Inputs";
import { Link } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
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
      navigate("/");
    }
  }, [authStatus, authError, navigate]);

  const canSubmit = [...Object.values(data)].every(Boolean);

  return (
    <main className="relative flex h-screen w-screen overflow-hidden bg-[#8BB2B2] md:justify-between">
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
            className="h-14 rounded-lg bg-[#8BB2B2] text-xl font-semibold text-[white]"
          >
            Login
          </button>
        </form>
        {authStatus === "loading" && <p>Logging in...</p>}
        {authStatus === "failed" && <p>Error: {authError}</p>}
        <p className="px-8 text-sm text-[#A1A1A1]">
          {" "}
          Don't have account?{" "}
          <Link to={"/signup"} className="font-bold text-[#8BB2B2]">
            Create Account
          </Link>
        </p>
      </section>
      <section className="m-10 flex h-full w-[30%] flex-col overflow-hidden">
        <img src={Logo} className="h-20 w-20" />
        <p className="mt-10 text-2xl font-bold text-primary-black">
          3D Models of
        </p>
        <p className="mb-8 text-4xl font-bold text-primary-black">
          {" "}
          Abstract Digital Art
        </p>
        <p className="text-lg text-primary-black">
          Make your design looks more attarctive with
          <br /> 3D abstract geometric digital art.
        </p>
      </section>
      <img
        src={tube3d}
        className="absolute bottom-0 right-[20%] h-[400px] w-[400px] animate-loadImage delay-500"
      />
    </main>
  );
}
