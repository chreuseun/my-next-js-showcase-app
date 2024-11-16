import { geistSans, fontSpectral } from "@root/assets/fonts/fontsConfig";
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
        className={`${geistSans.className} text-5xl md:text-7xl text-center font-extrabold mt-6 px-11`}
      >
        {HOME_PAGE_COPIES.HEADER_GREETINGS_1}
      </div>
      <div
        className={`${geistSans.className} text-3xl md:text-4xl text-center font-semibold   px-11 mt-3  text-secondaryText`}
      >
        {HOME_PAGE_COPIES.HEADER_GREETINGS_2}
      </div>
      <div
        className={`${fontSpectral.className} text-xl md:text-2xl text-center px-11  text-secondaryText`}
      >
        {HOME_PAGE_COPIES.SUBHEADER_1}
      </div>
      <div
        className={`${geistSans.className} m-auto text-xl md:text-lg text-justify font-mono px-5 md:max-w-4xl mt-6`}
      >
        {HOME_PAGE_COPIES.MY_DESCRIPTION}
      </div>
      <SkillTree />
    </main>
  );
};

export default Home;
