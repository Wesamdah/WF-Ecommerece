import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Inputs({
  type,
  placeholder,
  name,
  value,
  setData,
  valid,
  Regex,
}) {
  const [typo, setTypo] = useState(type);
  const [focus, setFocus] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {type === "password" ? (
        <div className="w-[100%] mb-11 ">
          <div className="w-[100%] relative ">
            <input
              type={typo}
              placeholder={placeholder}
              name={name}
              id={name}
              value={value}
              onChange={handleChange}
              required
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="w-[100%] h-[50px] p-5  outline-none border border-[#ddd] rounded-lg focus:border-2 focus:border-solid focus:border-[#1d3557]"
            />
            <Icon
              icon={
                typo === "password" ? "heroicons-solid:eye" : "ri:eye-off-fill"
              }
              onClick={() => setTypo(typo === "password" ? "text" : "password")}
              className="absolute right-5 top-1/2 -translate-y-2/4 text-[#219ebc] hover:text-[#1d3557] cursor-pointer "
            />
          </div>
          {Regex
            ? !valid &&
              focus &&
              (name === "password" ? (
                <p
                  id="pwdnote"
                  className={
                    !valid
                      ? " flex justify-start  text-xs mt-4 items-center text-[#e63946]  "
                      : "hidden"
                  }
                >
                  <Icon
                    icon={"material-symbols:info-outline"}
                    className="text-xl mr-2"
                  />
                  8 to 24 characters. must includes uppercase and lowercase
                  letters , a number and a special charechtar. Allow special
                  charectars
                </p>
              ) : (
                <p
                  id="confirmnote"
                  className={
                    !valid
                      ? "flex justify-start  text-xs mt-4 items-center text-[#e63946]"
                      : "hidden"
                  }
                >
                  <Icon
                    icon={"material-symbols:info-outline"}
                    className="text-xl mr-2"
                  />
                  Must match the first password input field
                </p>
              ))
            : null}
        </div>
      ) : (
        <div className="w-[100%] relative mb-11">
          <input
            type={typo}
            placeholder={placeholder}
            name={name}
            id={name}
            value={value}
            onChange={handleChange}
            required
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="w-[100%] h-[50px] p-5  outline-none border border-[#ddd] rounded-lg focus:border focus:border-solid focus:border-primary-black"
          />
          {!valid && focus && type === "text" && (
            <p
              id="uidnote"
              className={
                !valid
                  ? "flex justify-start  text-xs mt-4 items-center text-[#e63946]"
                  : "hidden"
              }
            >
              <Icon
                icon={"material-symbols:info-outline"}
                className="text-xl mr-2"
              />
              4 to 24 characters. must begin with a letter.
              Letters,number,sunderscores
            </p>
          )}
        </div>
      )}
    </>
  );
}
