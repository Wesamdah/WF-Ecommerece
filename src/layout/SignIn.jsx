import React, { useState } from "react";
// images
import Logo from "../assets/imgs/logo.png";
import tube3d from "../assets/imgs/tube3d.png";
// components
import Inputs from "../components/Inputs";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const canSubmit = [...Object.values(data)].every(Boolean);

  return (
    <main className="w-screen h-screen bg-[#8BB2B2]  flex md:justify-between overflow-hidden relative">
      <section className="p-20 bg-[white] boder rounded-r-[30px] h-full w-[60%] flex flex-col items-start justify-center  animate-loadForm">
        <p className="px-8 text-[#525252] font-semibold text-3xl">Login </p>
        <form onSubmit={handleSubmit} className="p-8 flex flex-col w-[100%]">
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
            className="bg-[#8BB2B2] h-14 font-semibold text-xl text-[white] rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="px-8 text-[#A1A1A1] text-sm">
          {" "}
          Don't have account?{" "}
          <Link to={"/signup"} className="text-[#8BB2B2] font-bold ">
            Create Account
          </Link>
        </p>
      </section>
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
      <img
        src={tube3d}
        className=" w-[400px] h-[400px] absolute bottom-0 right-[20%] animate-loadImage delay-500 "
      />
    </main>
  );
}
