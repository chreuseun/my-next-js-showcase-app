"use client";

import TextInput from "@root/components/common/TextInput";

const LandingPage = () => {
  return (
    <div className="bg-bg2 min-h-screen flex flex-col justify-center items-center ">
      <div className="bg-bg1 p-8 rounded-2xl flex flex-col justify-center items-stretch w-auto lg:w-1/4">
        <div className="text-center mb-2 text-brand1 text-base lg:text-4xl">
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
      </div>
    </div>
  );
};

export default LandingPage;
