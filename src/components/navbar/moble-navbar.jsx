import React, { useState } from "react";
import Burger from "./burger/burger";

export const MobileNavbar = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  const handleClick = () => setActiveBurger(!activeBurger);
  return (
    <nav className="block lg:hidden w-full fixed top-0 z-50 ">
      <div className="flex items-center justify-between">
        <Burger onClick={handleClick} activeBurger={activeBurger} />
        <div
          className={`h-screen w-screen absolute bg-gray-900 top-0 left-0 z-40 overflow-hidden ${
            activeBurger ? "block" : "hidden"
          }`}
        >
          <div className="text-white p-5 h-screen items-center">
            <div className="text-white mt-32 text-center">
              <div className="my-8 text-md">ABOUT</div>
              <div className="my-8 text-md">PORTFOLIO</div>
              <div className="my-8 text-md">CONTACT ME</div>
              <div className="my-8 text-md">DOWNLOAD CV</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
