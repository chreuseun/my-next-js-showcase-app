const FormSubmitButton: React.FC<{
  type?: "submit" | "reset" | "button";
}> = ({ type = "submit" }) => {
  return (
    <button
      type={type}
      className="bg-success1 hover:bg-success2 text-lightText font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit
    </button>
  );
};

export default FormSubmitButton;
