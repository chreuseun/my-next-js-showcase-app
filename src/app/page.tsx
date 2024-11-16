import "@root/styles/home/animate-intro-text.css";

import { geistMono, geistSans } from "@root/assets/fonts/fontsConfig";
import SkillTree from "@root/components/pages/Home/SkillTreeSection";

const HOME_PAGE_COPIES = {
  HEADER_GREETINGS_1: "Hi, I'm Eunille Villegas",
  HEADER_GREETINGS_2: "A React Native & Web Developer",
  SUBHEADER_1: "At your service, simply your app developer for all",
  MY_DESCRIPTION: `
I am a seasoned React Native developer with over 5 years of experience, specializing in crafting innovative, user-centric apps for iOS, Android, and the web. Currently leading UX/UI development at Growsari Enterprise, I excel in delivering seamless e-commerce solutions from concept to launch.`,
};

const Home = () => {
  return (
    <main className="flex-grow overflow-y-auto w-full p-4">
      <div
        className={`${geistSans.className} text-5xl md:text-7xl text-center font-extrabold mt-6 px-11 animation-focus-in`}
      >
        {HOME_PAGE_COPIES.HEADER_GREETINGS_1}
      </div>
      <div
        className={`${geistSans.className} text-3xl md:text-4xl text-center font-semibold   px-11 mt-3  text-secondaryText`}
      >
        {HOME_PAGE_COPIES.HEADER_GREETINGS_2}
      </div>
      <div
        className={`text-xl md:text-2xl text-center px-11  text-secondaryText`}
      >
        {HOME_PAGE_COPIES.SUBHEADER_1}
      </div>
      <div
        className={`${geistSans.className} m-auto text-xl md:text-lg text-justify font-mono px-5 md:max-w-4xl mt-6`}
      >
        {HOME_PAGE_COPIES.MY_DESCRIPTION}
      </div>
      <SkillTree />

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
    </main>
  );
};

export default Home;
