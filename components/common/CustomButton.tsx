"use-client";

import { MouseEventHandler, ReactNode } from "react";

const CustomButton: React.FC<{
  placeholder?: string;
  className?: string;
  label?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ className = "", label = "", children, onClick }) => {
  return (
    <button
      className={`
        bg-brand1
        border 
        hover:bg-success1 
        hover:text-text1
        text-bg2
        font-bold
        py-2 px-4 
        rounded-lg 
        ${className}`}
      onClick={onClick}
    >
      {children ? children : label}
    </button>
  );
};

export default CustomButton;
