import React from "react";
import logo from "../assets/Letter A.svg";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
  const redirectTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-20 cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="cursor-pointer" onClick={() => redirectTo("https://www.linkedin.com/in/groot34/")} />
        <FaGithub className="cursor-pointer" onClick={() => redirectTo("https://github.com/groot34")} />
        <FaInstagram className="cursor-pointer" onClick={() => redirectTo("https://www.instagram.com/a.th.a.rva/")} />
        <FaXTwitter className="cursor-pointer" onClick={() => redirectTo("https://x.com/groot34_")} />
        <SiGeeksforgeeks className="cursor-pointer" onClick={() => redirectTo("https://www.geeksforgeeks.org/user/groot34/")} />
        <SiLeetcode className="cursor-pointer" onClick={() => redirectTo("https://leetcode.com/u/groot34/")} />
      </div>
    </nav>
  );
};

export default Navbar;
