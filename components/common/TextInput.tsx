import { HTMLInputTypeAttribute } from "react";

const TextInput: React.FC<{
  placeholder?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
}> = ({ placeholder = "", className = "", type }) => {
  return (
    <input
      className={`outline outline-border2 outline-1 focus:outline-2 focus:outline-brand1 bg-bg2 text-text1 p-2 rounded-md  ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
