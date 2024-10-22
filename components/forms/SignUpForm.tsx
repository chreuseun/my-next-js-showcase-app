import { FormEventHandler } from "react";
import FormSubmitButton from "../common/FormSubmitButton";
import FormTextInput from "../common/FormTextInput";

const SIGNUP_FORM_CONFIG = {
  username: "username",
  password: "password",
  repeat_password: "repeat_password",
};

const SignUpForm = () => {
  // const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();

  //   const getElementValue = (elementName: string) => {
  //     try {
  //       const { value } = (event.target as HTMLFormElement).elements.namedItem(
  //         elementName
  //       ) as {
  //         value: string;
  //       };
  //       return value;
  //     } catch {
  //       return null;
  //     }
  //   };

  // const formData = {
  //   username: getElementValue(SIGNUP_FORM_CONFIG.username),
  //   password: getElementValue(SIGNUP_FORM_CONFIG.password),
  //   repeat_password: getElementValue(SIGNUP_FORM_CONFIG.repeat_password),
  // };
  // };

  return (
    <form>
      <FormTextInput label="Username" id="username" required />
      <FormTextInput label="Password" id="password" required type="password" />
      <FormTextInput
        label="Repeat Password"
        id="repeat_password"
        required
        type="password"
      />
      <div className="flex items-center justify-between">
        <FormSubmitButton />
      </div>
    </form>
  );
};

export default SignUpForm;
