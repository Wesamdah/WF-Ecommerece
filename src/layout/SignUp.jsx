import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  selectAuthError,
  selectAuthStatus,
} from "../features/auth/authSlice";
import { showPopup } from "../features/popup/popupSlice";
// assets
import Logo from "../assets/imgs/logo.png";
import onlineShopping from "../assets/imgs/onlineShopping.png";
import { Icon } from "@iconify/react/dist/iconify.js";
// components
import Inputs from "../components/Inputs";

const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SvgIcon = ({ theIcon }) => <Icon icon={theIcon} className="text-3xl" />;

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);

  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validName, setValidName] = useState(true);
  const [validPwd, setValidPwd] = useState(true);
  const [validMatch, setValidMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = userRegex.test(data.name);
    const v2 = PasswordRegex.test(data.password);
    if (!v1 || !v2) {
      console.log("Invalid Entry");
      return;
    }
    const formDataToSend = new FormData();
    Object.keys(data).forEach((key) => formDataToSend.append(key, data[key]));
    dispatch(registerUser(formDataToSend));
  };

  const validateInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setValidName(userRegex.test(value));
        break;
      case "password":
        setValidPwd(PasswordRegex.test(value));
        break;
      case "confirmPassword":
        setValidMatch(value === data.password);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (authStatus === "succeeded" && !authError) {
      navigate("/");
    }
    if (authStatus === "failed" && authError) {
      dispatch(
        showPopup({ message: authError.msg || authError, type: "error" }),
      );
    }
  }, [authStatus, authError, navigate]);

  const canSubmit = [...Object.values(data)].every(Boolean);

  return (
    <main className="relative flex h-screen w-screen flex-col overflow-hidden bg-orange md:flex-row md:justify-between">
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

      <section className="flex h-[calc(100%_-_124px)] w-full flex-col items-center justify-center overflow-hidden rounded-t-[30px] bg-[white] p-4 sm:p-6 md:h-full md:w-[60%] md:animate-loadForm md:items-start md:rounded-l-[30px] md:rounded-tr-none md:p-8 lg:h-full">
        <p className="mb-4 text-xl font-semibold text-[#525252] sm:text-2xl md:text-3xl">
          Create Account
        </p>
        <form onSubmit={handleSubmit} className="flex w-full flex-col">
          <Inputs
            name="name"
            type="text"
            placeholder="Enter Your First Name"
            value={data.name}
            setData={setData}
            valid={validName}
            validateInput={validateInput}
            regexMessage="4 to 24 characters. Must start with a letter. Only letters, numbers, hyphens, and underscores are allowed."
          />
          <Inputs
            name="lastName"
            type="text"
            placeholder="Enter Your Last Name"
            value={data.lastName}
            setData={setData}
            valid={true}
          />
          <Inputs
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={data.email}
            setData={setData}
            valid={true}
          />
          <Inputs
            name="password"
            type="password"
            placeholder="Enter Password"
            value={data.password}
            setData={setData}
            valid={validPwd}
            validateInput={validateInput}
            regexMessage="8 to 24 characters. Must include uppercase, lowercase, a number, and a special character."
          />
          <Inputs
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            setData={setData}
            valid={validMatch}
            validateInput={validateInput}
            regexMessage="Must match the first password input field."
          />
          <button
            type="submit"
            disabled={!canSubmit}
            className="flex h-12 items-center justify-center rounded-lg bg-orange text-lg font-semibold text-[white] md:h-14 md:text-xl"
          >
            {authStatus === "loading" ? (
              <SvgIcon theIcon="svg-spinners:180-ring-with-bg" />
            ) : (
              <p>Create Account</p>
            )}
          </button>
        </form>
        <p className="mt-2 text-center text-sm text-[#A1A1A1] sm:mt-4 md:text-left">
          Already have an account?{" "}
          <Link to={"/signin"} className="font-bold text-orange">
            Login
          </Link>
        </p>
      </section>

      {/* Decorative Image */}
      <img
        src={onlineShopping}
        className="absolute bottom-0 left-0 hidden h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:left-[10%]"
        alt="Shopping Illustration"
      />
    </main>
  );
}
