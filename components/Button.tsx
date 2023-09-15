import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="text-[17px] text-white bg-[#0C21C1] w-full flex items-center justify-center h-12 rounded-[32px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
