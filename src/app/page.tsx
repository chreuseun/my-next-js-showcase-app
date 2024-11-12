import Feeds from "@components/Feeds";

import { fontSpectral } from "@root/assets/fonts/fontsConfig";

const HOME_PAGE_COPIES = {
  HEADING_1: "Discover & Share",
  HEADING_2: "AI-Powered Prompt",
  DESCRIPTION_1: `Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts`,
};

const Home = () => {
  return (
    <main className="flex-grow overflow-y-auto w-full  p-4">
      {/* {Array.from({ length: 5 }, (_, index) => (
        <div
          className="p-3 border-border1 rounded-md border-2 my-2"
          key={`${index}`}
        >
          ITEM-{index}
        </div>
      ))} */}
    </main>
  );
};

export default Home;
