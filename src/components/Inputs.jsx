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
        <div className="mb-11 w-[100%]">
          <div className="relative w-[100%]">
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
              className="h-[50px] w-[100%] rounded-lg border border-[#ddd] p-5 outline-none focus:border-2 focus:border-solid focus:border-[#1d3557]"
            />
            <Icon
              icon={
                typo === "password" ? "heroicons-solid:eye" : "ri:eye-off-fill"
              }
              onClick={() => setTypo(typo === "password" ? "text" : "password")}
              className="absolute right-5 top-1/2 -translate-y-2/4 cursor-pointer text-orange hover:text-primary-black"
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
                      ? "mt-4 flex items-center justify-start text-xs text-[#e63946]"
                      : "hidden"
                  }
                >
                  <Icon
                    icon={"material-symbols:info-outline"}
                    className="mr-2 text-xl"
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
                      ? "mt-4 flex items-center justify-start text-xs text-[#e63946]"
                      : "hidden"
                  }
                >
                  <Icon
                    icon={"material-symbols:info-outline"}
                    className="mr-2 text-xl"
                  />
                  Must match the first password input field
                </p>
              ))
            : null}
        </div>
      ) : (
        <div className="relative mb-11 w-[100%]">
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
            className="h-[50px] w-[100%] rounded-lg border border-[#ddd] p-5 outline-none focus:border focus:border-solid focus:border-primary-black"
          />
          {!valid && focus && type === "text" && (
            <p
              id="uidnote"
              className={
                !valid
                  ? "mt-4 flex items-center justify-start text-xs text-[#e63946]"
                  : "hidden"
              }
            >
              <Icon
                icon={"material-symbols:info-outline"}
                className="mr-2 text-xl"
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
