import FormSubmitButton from "../common/FormSubmitButton";
import FormTextInput from "../common/FormTextInput";

const SIGNUP_FORM_CONFIG = {
  username: {
    id: "username",
    label: "Username",
  },
  password: {
    id: "password",
    label: "Password",
  },
  repeat_password: {
    id: "repeat_password",
    label: "Repeat password",
  },
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
      <FormTextInput {...SIGNUP_FORM_CONFIG.username} required />
      <FormTextInput
        {...SIGNUP_FORM_CONFIG.password}
        required
        type="password"
      />
      <FormTextInput
        {...SIGNUP_FORM_CONFIG.repeat_password}
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
