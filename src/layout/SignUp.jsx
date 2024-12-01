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
    <main className="w-screen h-screen bg-[#8BB2B2]  flex md:justify-between overflow-hidden relative ">
      <section className="m-10 flex flex-col w-[30%] h-full overflow-hidden ">
        <img src={Logo} className="w-20 h-20" />
        <p className="text-primary-black text-2xl font-bold mt-10">
          3D Models of
        </p>
        <p className="text-primary-black text-4xl font-bold mb-8">
          {" "}
          Abstract Digital Art
        </p>
        <p className="text-primary-black text-lg ">
          Make your design looks more attarctive with
          <br /> 3D abstract geometric digital art.
        </p>
      </section>
      <section className="p-20 bg-[white] boder rounded-l-[30px] h-full w-[60%] flex flex-col items-start justify-center  animate-loadForm">
        <p className="px-8 text-[#525252] font-semibold text-3xl">
          Create Account{" "}
        </p>
        <form onSubmit={handleSubmit} className="p-8 flex flex-col w-[100%]">
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
            className="bg-[#8BB2B2] h-14 font-semibold text-xl text-[white] rounded-lg"
          >
            Create Account
          </button>
        </form>
        <p className="px-8 text-[#A1A1A1] text-sm">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-[#8BB2B2] font-bold ">
            Login
          </Link>
        </p>
      </section>
      <img
        src={furniture}
        className=" w-[400px] h-[400px] absolute bottom-0 left-[20%] animate-loadImage delay-500 "
      />
    </main>
  );
}
