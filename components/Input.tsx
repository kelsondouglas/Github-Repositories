import React, { InputHTMLAttributes, ReactElement, forwardRef } from "react";
import { IconType } from "react-icons";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  textError?: string;
  Icon: IconType;
};

const Input = forwardRef<HTMLInputElement, InputType>(
  (
    { name, label, type = "text", placeholder, textError, Icon, ...props },
    ref
  ) => {
    return (
      <div className="items-start flex flex-col ">
        <label htmlFor={name} className="text-sm text-[#999999]">
          {label} :
        </label>
        <div className="border-transparent border-2 border-b-zinc-300 flex gap-3 items-center justify-center w-full focus-within:border-[#000842] transition-all">
          <Icon size={17} />
          <input
            ref={ref}
            type={type}
            {...props}
            name={name}
            id={name}
            placeholder={placeholder}
            className="flex-1 placeholder:text-base placeholder:text-[#000842] p-1 focus:outline-none"
          />
        </div>
        {textError && (
          <p className="text-rose-500 font-semibold mt-2">{textError}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
