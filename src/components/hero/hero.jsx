import React from "react";
import Behance from "./img/Behance.png";
import Dribbble from "./img/Dribbble.png";
import Linkedin from "./img/Linkedin.png";
import { Link } from "react-router-dom";
import { ReactComponent as HeroBacground } from "./img/HeroBackground.svg";
import { ReactComponent as HeroBanner } from "./img/HeroBanner.svg";
import { ReactComponent as CircleObjects } from "./img/CircleObjects.svg";
import CustomButton from "../custom-button/CustomButton";
import { useSpring, animated } from "react-spring";
import Img01 from "../img/strategy.svg";
import Img02 from "../img/information-architecture.svg";
import Navbar from "../navbar/navbar";
import "./hero.css";

const HeroButtonLink = ({ icon, ...props }) => {
  return (
    <Link {...props}>
      <img src={icon} alt={icon} />
    </Link>
  );
};

export const Hero = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <>
      <Navbar />
      <div className="hero lg:h-screen mt-52 lg:mt-0">
        <div className="container mx-auto lg:px-10 xl:px-32 h-auto lg:h-full flex flex-col lg:flex-row items-center">
          <div className="hero-item__left lg:w-1/2 xl:w-2/5 lg:pt-32 flex justify-center flex-col ">
            <h1 className="text-mlg lg:text-lg  mb-5 font-bold">
              Hello, I'm Jil Muriel
            </h1>
            <p className="text-mmd lg:text-md mb-10">
              Multifunctional designer/developer <br />
              based in the PH - a traditionally <br />
              trained designer who codes.
            </p>
            <CustomButton text="HIRE ME" />
            <div className="flex items-center">
              <HeroButtonLink icon={Dribbble} className="mr-10" />
              <HeroButtonLink icon={Behance} className="mr-10" />
              <HeroButtonLink icon={Linkedin} />
              <CircleObjects className="hidden lg:block hero-object__left" />
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 xl:w-3/5">
            <div className="hero-img ">
              <HeroBacground />
              <HeroBanner />
              <CircleObjects className="hero-object__right" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 border text-center flex items-center justify-items-center">
        <div className="mx-auto">
          <h1 className="text-mlg lg:text-lg  mb-5 font-bold block">
            WHAT I DO
          </h1>
        </div>
      </div>
      <div className="h-screen flex lg:px-20">
        <div className="border mx-auto lg:px-10 xl:px-32 h-auto lg:h-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex justify-center flex-col text-center">
            <img className="px-20" src={Img01} alt={Img01} />
          </div>
          <div className="lg:w-1/2 flex justify-center flex-col border">
            <div className="py-20 lg:px-32">
              <p className="text-md font-bold mb-5">Strategy</p>
              <p className="text-msm">
                There’s no style over substance here. I bring together form and
                the function to create something that looks good and performs
                brilliantly. Simple.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex lg:px-20">
        <div className="border mx-auto lg:px-10 xl:px-32 h-auto lg:h-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex justify-center flex-col border">
            <div className="py-20 lg:px-32">
              <p className="text-md font-bold mb-5">Information Architecture</p>
              <p className="text-msm">
                It’s about organizing the content and flow of a website based on
                research and planning. Eventually I come up with a
                structure/design that balances the users’ desires with the
                business’s needs.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center flex-col text-center">
            <img className="px-20" src={Img02} alt={Img02} />
          </div>
        </div>
      </div>
      <div className="h-screen flex lg:px-20">
        <div className="border mx-auto lg:px-10 xl:px-32 h-auto lg:h-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex justify-center flex-col text-center">
            <img className="px-20" src={Img01} alt={Img01} />
          </div>
          <div className="lg:w-1/2 flex justify-center flex-col border">
            <div className="py-20 lg:px-32">
              <p className="text-md font-bold mb-5">Design & Development</p>
              <p className="text-msm">
                As a designer and developer, I understand the perfect user
                interface should look good and work even better. Alongside my
                clients, I uncover problems and solve them. In short, I create
                bolder online experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
