import { ReactNode } from "react";

const CustomButton: React.FC<{
  placeholder?: string;
  className?: string;
  label?: string;
  children?: ReactNode;
}> = ({ className = "", label = "", children }) => {
  return (
    <button
      className={`
        bg-brand2 
        border 
        hover:bg-success1 
        hover:text-text1
        text-bg2
        font-bold
        py-2 px-4 
        rounded-lg ${className} p-0`}
    >
      {children ? children : label}
    </button>
  );
};

export default CustomButton;
