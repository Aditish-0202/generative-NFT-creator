import React from "react";

const GeneratePage = () => {
  return (
    <div className="min-h-screen bg-[rgba(21,21,44,1)] flex flex-col items-center pt-24 px-4">
      {/* Headline */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          Generate <span className="border-b-4 border-blue-400 px-2">NFT</span>{" "}
          with AI.
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl mb-24">
          Create and deploy NFT artwork in seconds
        </p>
      </div>

      {/* Generate Bar */}
      <form className="w-full  max-w-2xl flex items-center bg-[rgba(27,28,43,1)] rounded-xl shadow-lg px-4 py-2">
        {/* Prompt input */}
        <input
          type="text"
          className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 outline-none px-4 py-3 text-lg"
          placeholder="A collection of cute cyberpunk robots"
        />
        {/* Generate button */}
        <button
          className="
        px-6 py-2 rounded-lg bg-[rgba(28,30,43,0.8)]
  border
  border-[#40aaff]
  shadow-[0_2px_24px_0_rgba(64,170,255,0.15)]
  transition-all
  duration-200
  text-white
  font-semibold
  hover:bg-[#092134]
  hover:border-[#53dfff]
  hover:shadow-[0_3px_40px_0_rgba(83,223,255,0.2)]
  focus:outline-none
  focus:ring-2
  focus:ring-[#40aaff]
"
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default GeneratePage;
