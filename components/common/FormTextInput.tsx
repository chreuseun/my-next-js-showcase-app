import { HTMLInputTypeAttribute } from "react";

const FormTextInput: React.FC<{
  label?: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  required: boolean;
}> = ({ id, label = "", type = "text", required = false }) => {
  return (
    <div className="mb-4">
      {label ? (
        <label
          className="block text-text2 text-sm font-bold mb-2"
          htmlFor="username"
        >
          {label}
        </label>
      ) : null}

      <input
        id={id}
        name={id}
        type={type}
        className="shadow text-darkText appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
        required={required}
      />
    </div>
  );
};

export default FormTextInput;
