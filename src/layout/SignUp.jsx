import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// imags
import Logo from "../assets/imgs/logo.png";
import furniture from "../assets/imgs/furniture3d.png";
// components
import Inputs from "../components/Inputs";

const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validName, setValidName] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validMatch, setValidMatch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = userRegex.test(data.name);
    const v2 = PasswordRegex.test(data.password);
    if (!v1 || !v2) {
      console.log("Invalid Entry");
      return;
    }
  };

  const canSubmit = [...Object.values(data)].every(Boolean);

  useEffect(() => {
    const result = userRegex.test(data.name);
    setValidName(result);
  }, [data.name]);

  useEffect(() => {
    const result = PasswordRegex.test(data.password);
    setValidPwd(result);
    const match = data.password === data.confirmPassword;
    setValidMatch(match);
  }, [data.password, data.confirmPassword]);

  return (
    <main className="relative flex h-screen w-screen overflow-hidden bg-[#8BB2B2] md:justify-between">
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
      <section className="boder flex h-full w-[60%] animate-loadForm flex-col items-start justify-center rounded-l-[30px] bg-[white] p-20">
        <p className="px-8 text-3xl font-semibold text-[#525252]">
          Create Account{" "}
        </p>
        <form onSubmit={handleSubmit} className="flex w-[100%] flex-col p-8">
          <Inputs
            name={"name"}
            type="text"
            placeholder="Enter Your Name"
            value={data.name}
            setData={setData}
            valid={validName}
            Regex
          />
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
            valid={validPwd}
            Regex
          />
          <Inputs
            name={"confirmPassword"}
            type="password"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            setData={setData}
            valid={validMatch}
            Regex
          />

          <button
            type="submit"
            disabled={!canSubmit}
            className="h-14 rounded-lg bg-[#8BB2B2] text-xl font-semibold text-[white]"
          >
            Create Account
          </button>
        </form>
        <p className="px-8 text-sm text-[#A1A1A1]">
          Already have an account?{" "}
          <Link to={"/signin"} className="font-bold text-[#8BB2B2]">
            Login
          </Link>
        </p>
      </section>
      <img
        src={furniture}
        className="absolute bottom-0 left-[20%] h-[400px] w-[400px] animate-loadImage delay-500"
      />
    </main>
  );
}
