import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function UserLayout() {
  const [gender, setGender] = useState("Woman");
  console.log(gender);
  return (
    <div className="h-screen w-screen bg-[white] px-14 py-8">
      <Header setGender={setGender} gender={gender} />
      <Outlet />
    </div>
  );
}
