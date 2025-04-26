import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white bg-white">
      <div className=" flex flex-wrap items-center justify-between py-3 px-6">
        <a to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="MachineTools-Sales.com"
            className="h-10"
          />
        </a>
        <div className="flex-grow mx-6 hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Our Catalog"
              className="w-full px-4 py-2 pr-10 rounded-full border border-gray-600 text-black focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-gray-600 rounded-r-full rounded-l-none px-4">
              <AiOutlineSearch className="w-[25px] h-[25px] text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-gray-600 px-4 py-2 rounded-2xl hidden lg:block">
            CATEGORIES
          </button>
          <a
            to="/register"
            className="bg-gray-600 px-4 py-2 rounded-2xl hidden lg:block"
          >
            REGISTER NOW
          </a>
          <a
            to="/prices"
            className="bg-gray-600 px-4 py-2 rounded-2xl hidden lg:block"
          >
            PRICES
          </a>
          <button
            className="lg:hidden ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="bg-[#374151] hidden lg:flex px-25">
        <div className="container mx-auto flex justify-start space-x-8 text-md items-center">
          <a to="/" className=" bg-gray-600 p-3">
            Home
          </a>
          <a to="/about" className="">
            About Us
          </a>
          <a to="/faq" className="">
            FAQ
          </a>
          <a to="/contact" className="">
            Contact Us
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-[#374151] space-y-2 py-4">
           <div className="relative">
            <input
              type="text"
              placeholder="Search Our Catalog"
              className="w-full px-4 py-2 pr-10 rounded-full border border-gray-600 text-white focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-gray-600 rounded-r-full rounded-l-none px-4">
              <AiOutlineSearch className="w-[25px] h-[25px] text-white" />
            </div>
          </div>
          <a
            to="/"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            to="/about"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            to="/faq"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            to="/contact"
            className="hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>

          <button className="bg-gray-600 px-4 py-2 rounded-2xl mt-4">
            CATEGORIES
          </button>
          <a to="/register" className="bg-gray-600 px-4 py-2 rounded-2xl">
            REGISTER NOW
          </a>
          <a to="/prices" className="bg-gray-600 px-4 py-2 rounded-2xl">
            PRICES
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
