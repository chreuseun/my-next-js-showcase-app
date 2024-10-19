import { Metadata } from "next";
import { redirect } from "next/navigation";

import TextInput from "@root/components/common/TextInput";
import CustomButton from "@root/components/common/CustomButton";
import Link from "next/link";
import { SIGNUP_PATH } from "@root/routes/paths";

export const metadata: Metadata = {
  title: "Next.Js Showcase | Login page",
  description:
    "Welcome to Login page, enter your username and password or sign-up",
};

const LandingPage = () => {
  return (
    <div className="bg-bg2 min-h-screen flex flex-col justify-center items-center ">
      <div className="bg-bg1 p-8 rounded-2xl flex flex-col justify-center items-stretch w-auto lg:w-1/4">
        <div className="text-center mb-2 text-brand1 text-base lg:text-4xl font-bold">
          Next.JS
          <br />
          Showcase App
        </div>
        <TextInput
          placeholder="Username"
          type="text"
          className="mt-1 lg:mt-6 text-center"
        />
        <TextInput
          placeholder="Password"
          type="password"
          className="mt-3 text-center"
        />
        <CustomButton className="mt-8" label="Login" />
        <Link
          className="mt-4 flex flex-col justify-center items-stretch"
          href={SIGNUP_PATH}
        >
          <CustomButton
            className="text-sm py-0 px-0 text-border2 font-thin underline border-none bg-inherit cursor-pointer hover:bg-bg2"
            label="Create a new account"
          />
        </Link>
        <CustomButton
          className="text-sm py-0 px-0 text-border2 font-thin underline border-none bg-inherit cursor-pointer hover:bg-bg2 hover:text-brand2"
          label="Need new account? Sign-Up"
        />
      </div>
    </div>
  );
};

export default LandingPage;
