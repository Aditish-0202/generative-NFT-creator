import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  // Simple color mode toggle using state
  const [colorMode, setColorMode] = useState("light");
  const toggleColorMode = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
    // Optionally, set a class on <body> for global styling
    document.documentElement.classList.toggle("dark");
  };

  // Button color styles based on colorMode
  const buttonBg = colorMode === "dark" ? "bg-gray-700" : "bg-gray-200";
  const buttonText = colorMode === "dark" ? "text-white" : "text-black";

  return (
    <nav
      className={`py-4 ${
        colorMode === "dark" ? "bg-gray-900" : "bg-white"
      } transition-colors`}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div
          className={`flex flex-col sm:flex-row items-center justify-between px-6 py-3 rounded-md shadow-sm ${
            colorMode === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h1 className="font-bold text-center text-2xl sm:text-3xl flex items-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent mr-2"
            >
              Generative NFT Creator
            </Link>
            <span className="text-2xl" role="img" aria-label="rainbow">
              🌈
            </span>
          </h1>

          <div className="flex gap-2 items-center mt-2 sm:mt-0">
            <Link to="">
              <button
                className={`${buttonBg} ${buttonText} rounded-md px-2 py-1`}
                aria-label="Add"
              >
                <FiPlusSquare size={20} />
              </button>
            </Link>
            <button
              className={`${buttonBg} ${buttonText} rounded-md px-2 py-1`}
              onClick={toggleColorMode}
              aria-label="Toggle Color Mode"
            >
              {colorMode === "dark" ? (
                <FaMoon size={20} />
              ) : (
                <LuSun size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
