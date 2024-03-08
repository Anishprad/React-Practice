import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between shadow-xl items-center py-5 px-10 ">
      <div className="logo">
        <img className="h-12" src="/vite.svg" alt="" />
      </div>
      <nav className="flex space-x-7">
        <Link className=" font-bold text-[18px]" to={"/"}>
          Home
        </Link>
        <Link className="font-bold text-[18px]" to="/about">
          About
        </Link>
        <Link className="font-bold text-[18px]" to="/services">
          Services
        </Link>
        <Link className="font-bold text-[18px]" to="/blog">
          Blog
        </Link>
        <Link className="font-bold text-[18px]" to="/contact">
          Contact
        </Link>
      </nav>
      <div className="buttons">
        <button className="bg-blue-700 text-white text-[24px] shadow-xl border-8 border-green-800 px-5 py-2 rounded-xl">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
