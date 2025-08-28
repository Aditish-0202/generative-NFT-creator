import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar2 = () => {
  const location = useLocation();

  // For highlighting active nav link
  const navLink = "px-4 py-2 font-medium transition-colors hover:text-blue-500";
  const activeNavLink = "text-blue-400 underline";

  return (
    <nav className="w-full bg-gray-900 py-3 shadow flex items-center">
      {/* Left: Logo/Emoji + Project Name */}
      <div className="flex items-center ml-6 mr-8">
        <span className="text-2xl mr-2" role="img" aria-label="rainbow">
          🌈
        </span>
        <span className="text-xl font-bold text-white tracking-wide">
          GenNFT
        </span>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex flex-1 justify-center space-x-3">
        <Link
          to="/"
          className={`${navLink} ${
            location.pathname === "/generate" ? activeNavLink : "text-white"
          }`}
        >
          Generate
        </Link>
        <Link
          to="/explore"
          className={`${navLink} ${
            location.pathname === "/explore" ? activeNavLink : "text-white"
          }`}
        >
          Explore
        </Link>
        <Link
          to="/mynfts"
          className={`${navLink} ${
            location.pathname === "/mynfts" ? activeNavLink : "text-white"
          }`}
        >
          My NFTs
        </Link>
      </div>

      {/* Right: Connect Wallet Button */}
      <div className="mr-6">
        <button
          className="
          
  px-6
  py-2
  rounded-lg
  bg-[rgba(28,30,43,0.8)]
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
          Connect Wallet
        </button>        
      </div>
    </nav>
  );
};

export default Navbar2;
