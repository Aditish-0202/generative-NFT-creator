import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
        <ConnectButton
          showBalance={false}
          chainStatus="icon"
          
        />
      </div>
    </nav>
  );
};

export default Navbar2;
