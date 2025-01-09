import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex text-2xl justify-between bg-zinc-200 font-mono w-full fixed top-0">
      <div className="m-0 p-4">
        <p className="text-2xl font-bold hover:text-white">
          {"< AbdulAhad />"}
        </p>
      </div>
      <div className="md:hidden items-center flex justify-center">
        <button onClick={toggleNav} className="text-black">
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 items-center">
        <ul className="flex justify-around">
          <li className="p-2 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 text-2xl rounded-full hover:font-bold bg-zinc-200 ${
                  isActive ? "underline underline-offset-8 font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-2 ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-2 text-2xl rounded-full hover:font-bold bg-zinc-200 ${
                  isActive ? "underline underline-offset-8 font-bold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li className="p-2 ">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `p-2 text-2xl rounded-full hover:font-bold bg-zinc-200 ${
                  isActive ? "underline underline-offset-8 font-bold" : ""
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="p-2 ">
            <NavLink
              to="/opensource"
              className={({ isActive }) =>
                `p-2 text-2xl rounded-full hover:font-bold bg-zinc-200 ${
                  isActive ? "underline underline-offset-8 font-bold" : ""
                }`
              }
            >
              Open Source
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Connect Button */}
      <div className="p-2 hidden md:flex">
        <NavLink to="/contact">
          <button className="p-2 px-8 text-lg text-white font-bold rounded-full bg-red-500 hover:bg-red-600">
            Connect
          </button>
        </NavLink>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <div className="absolute top-14 left-0 w-full h-screen bg-gray-900 md:hidden">
          <div className="flex flex-col justify-around items-center space-y-5 mt-14">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 text-xl text-white rounded-full hover:font-bold ${
                  isActive ? "underline underline-offset-8 font-bold" : ""
                }`
              }
              onClick={toggleNav} // Close menu on click
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-2 text-xl text-white rounded-full hover:font-bold ${
                  isActive ? "underline underline-offset-8 font-bold" : ""
                }`
              }
              onClick={toggleNav}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `p-2 text-xl text-white rounded-full hover:font-bold ${
                  isActive ? "underline underline-offset-8 font-bold" : ""
                }`
              }
              onClick={toggleNav}
            >
              Projects
            </NavLink>
            <NavLink
              to="/opensource"
              className={({ isActive }) =>
                `p-2 text-xl text-white rounded-full hover:font-bold ${
                  isActive ? "underline underline-offset-8 font-bold" : ""
                }`
              }
              onClick={toggleNav}
            >
              Open Source
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
