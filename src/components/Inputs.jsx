import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Inputs({
  type,
  placeholder,
  name,
  value,
  setData,
  valid,
  validateInput,
  regexMessage,
}) {
  const [inputType, setInputType] = useState(type);
  const [focus, setFocus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    validateInput && validateInput(e); // Trigger validation on change
  };

  const inputClass =
    "h-[50px] w-[100%] rounded-lg border border-[#ddd] p-5 outline-none focus:border-2 focus:border-solid focus:border-[#1d3557]";
  const errorClass =
    "mt-4 flex items-center justify-start text-xs text-[#e63946]";

  return (
    <div className="mb-6 w-[100%] md:mb-11">
      <div className="relative w-[100%]">
        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          required
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={`${inputClass} focus:outline-none ${valid && value ? (valid ? "focus:border-none focus:outline-[green]" : "focus:border-none focus:outline-[red]") : "outline-none"}`}
        />
        {type === "password" && (
          <Icon
            icon={
              inputType === "password"
                ? "heroicons-solid:eye"
                : "ri:eye-off-fill"
            }
            onClick={() =>
              setInputType(inputType === "password" ? "text" : "password")
            }
            className="absolute right-5 top-1/2 -translate-y-2/4 cursor-pointer text-orange hover:text-primary-black"
          />
        )}
      </div>

      {!valid && focus && regexMessage && (
        <p className={`${errorClass} ${value ? "block" : "hidden"}`}>
          <Icon
            icon={"material-symbols:info-outline"}
            className="mr-2 text-xl"
          />
          {regexMessage}
        </p>
      )}
    </div>
  );
}
