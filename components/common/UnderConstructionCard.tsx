import { geistMono, geistSans } from "@root/assets/fonts/fontsConfig";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="select-none text-center p-8 bg-white shadow-neumorphic rounded-lg max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-primaryText mb-4">
        Page Under Construction
      </h1>
      <p className="text-lg text-secondaryText mb-6">
        We're working hard to bring you this page. Stay tuned!
      </p>

      <div className="flex justify-center items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 animate-spin text-icon_dark_brown"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M22 12a10 10 0 1 0-10 10" />
        </svg>
      </div>

      <div className="flex flex-col items-center mt-8">
        <p className={`text-lg text-gray-800 ${geistSans.className} mb-2`}>
          Feel free to reach out to me for any questions, schedule a discussion
          or inquiries.
        </p>

        <a
          href="mailto:eunillevillegaseunille@gmail.com"
          className="text-primaryBG flex-shrink inline-flex items-center px-6 py-3 bg-cardBG_1 font-semibold rounded-full shadow-lg hover:bg-cardBG_1/80 focus:outline-none focus:ring-2 focus:ring-primaryBG transition-all"
        >
          <span
            className={geistMono.className}
          >{`Let's connect, Email Me`}</span>
        </a>
      </div>

      <p className="mt-6 text-sm text-secondaryText">
        Thanks for your patience!
      </p>
    </div>
  );
};

export default UnderConstruction;
