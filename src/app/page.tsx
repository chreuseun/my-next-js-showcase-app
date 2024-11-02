import Feeds from "@components/Feeds";

import { fontSpectral } from "@root/assets/fonts/fontsConfig";

const HOME_PAGE_COPIES = {
  HEADING_1: "Discover & Share",
  HEADING_2: "AI-Powered Prompt",
  DESCRIPTION_1: `Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts`,
};
const { HEADING_1, HEADING_2, DESCRIPTION_1 } = HOME_PAGE_COPIES;

const Home = () => {
  return (
    <div className="w-full border-4 border-blue-200">
      <div className="p-6">
        <h1 className={`text-5xl text-center font-900 text-dark`}>
          <span className={`${fontSpectral.className} font-800`}>
            {HEADING_1}
          </span>
          <br />
          <div className="text-transparent bg-gradient-to-r from-customGold via-w-500 to-customOrange bg-clip-text font-900">
            {HEADING_2}
          </div>
        </h1>
        <p className="text-secondary mt-5 text-center text-lg">
          {DESCRIPTION_1}
        </p>
        <Feeds />
      </div>
    </div>
  );
};

export default Home;
