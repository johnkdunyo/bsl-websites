import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const HeroSection = () => {
  return (
    <section className=" bg-[url('/assets/img/backgrounds/career.jpeg')] h-[70vh] sm:h-[65vh] md:h-[68vh] bg-cover  bg-center top-0 ">
      <div className="backdrop-brightness-50 sm:backdrop-brightness-[0.8] h-full w-full">
        <div className=" container mx-auto text-white flex h-full px-4 sm:px-0  justify-center sm:items-end  pb-10  relative ">
          {/* mobile */}
          <Animate.FadeUp className="sm:hidden   w-full    flex  flex-col items-center justify-evenly text-center mt-20">
            {/* <div className="sm:hidden   w-full    flex  flex-col items-center justify-evenly text-center mt-20 "> */}
            <h2 className="headerText1 ">Careers</h2>
            <h1 className="text-xl tracking-widest">
              We are always looking for new talents
            </h1>
            {/* </div> */}
          </Animate.FadeUp>

          {/* desktop */}
          <Animate.FadeUp className="hidden sm:flex flex-col  h-full w-full custom-container justify-center items-center">
            {/* <div className="hidden sm:flex flex-col  h-full w-full custom-container justify-center items-center"> */}
            <div className=" max-w-4xl flex flex-col items-center gap-10 mt-20">
              <h2 className="headerText1 text-center">Careers</h2>
              <p className="flex text-[1.7rem] text-center   ">
                We are always looking for new talents
              </p>
            </div>
            {/* </div> */}
          </Animate.FadeUp>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
