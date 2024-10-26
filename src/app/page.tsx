import Feeds from "@root/components/Feeds";

const Home = () => {
  return (
    <main className="border border-gray-200 w-full">
      <div className="p-6">
        <h1 className="text-5xl text-center font-900 text-dark">
          Discover & Share
          <br />
          <div className="text-transparent bg-gradient-to-r from-customGold via-w-500 to-customOrange bg-clip-text font-900">
            AI-Powered Prompt
          </div>
        </h1>
        <p className="text-secondary mt-5 text-center text-lg">
          Promptopia is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
        <Feeds />
      </div>
    </main>
  );
};

export default Home;
