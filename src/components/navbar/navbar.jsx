import React from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./moble-navbar";

const NavLink = ({ link, text, active }) => (
  <Link
    className={`mr-8 font-semibold ${
      active ? "opacity-100" : "opacity-90"
    } hover:opacity-100 focus:opacity-100`}
    to={link}
  >
    {text}
  </Link>
);

export const Navbar = () => {
  return (
    <>
      <MobileNavbar />
      <nav className="hidden lg:block w-full navbar pt-14 py-5 fixed">
        <div className="container mx-auto px-10 flex items-center justify-between">
          <span className="font-bold text-md">Jil Muriel</span>
          <div className="flex items-center">
            <NavLink link="/about" text="ABOUT" />
            <NavLink link="/about" text="PORTFOLIO" />
            <NavLink link="/about" text="CONTACT ME" />
            <NavLink link="/about" text="DOWNLOAD" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
