import React, { useState } from "react";
import "./burger.css";

export const Burger = ({ activeBurger, ...props }) => {
  return (
    <div
      className={`z-50 hamburger hamburger--emphatic js-hamburger relative right-0 ${
        activeBurger ? "is-active" : ""
      } `}
      {...props}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default Burger;
