import { Metadata } from "next";

import SignUpForm from "@root/components/forms/SignUpForm";

export const metadata: Metadata = {
  title: "Sign-up | Next.Js Showcase",
  description: "Create a new account",
};

const COPY_CHANGES = {
  TITLE: "Sign up",
};

const SignUpPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center bg-bg1">
      {/* Form container */}
      <div className="flex-1 w-full max-w-xl p-3">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          aria-label="Sign up form"
        >
          {COPY_CHANGES.TITLE}
        </h1>

        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
