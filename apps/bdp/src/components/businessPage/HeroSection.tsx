import React from "react";
import Lottie from "react-lottie";
import ScrollDownLottieData from "../../../public/assets/lottie/scrolldown.json";

const HeroSection = () => {
  const lottieDefaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: ScrollDownLottieData,
  };

  return (
    <section className="  h-[100vh] sm:h-[130vh]   top-0  relative  z-10 ">
      <div className="absolute inset-0   bg-video    ">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          playsInline
        >
          <source src="/assets/videos/business.webm" type="video/webm" />
          <p>browssr does not support</p>
        </video>
      </div>
      <div className="relative  h-full  flex flex-col   justify-end gap-8 sm:gap-20  ">
        <div className=" container mx-auto text-white flex h-full px-4 sm:px-0  justify-center sm:items-end items-center  pb-16 sm:pb-0  ">
          {/* mobile */}
          <div className="sm:hidden  w-full    flex  flex-col items-center justify-center text-center   my-4 ">
            <div className="max-w-3xl flex flex-col gap-16">
              <h2 className="headerText3 text-center font-extralight text-[2.5rem]">
                Delivering <span className="font-bold">Value</span> through{" "}
                <span className="font-bold">Products</span>,{" "}
                <span className="font-bold">Services</span> and{" "}
                <span className="font-bold">Customized</span> Solutions.
              </h2>
              <p className="flex sm:hidden text-xl leading-8 sm:text-3xl  ">
                At Broadspectrum, our comprehensive technological solutions help
                companies achieve greater success.
              </p>

              <div className="flex justify-center absolute bottom-0 w-full left-0 right-0">
                <button className="">
                  <Lottie
                    options={lottieDefaultOptions}
                    height={160}
                    width={160}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* desktop */}
          <div className="hidden sm:flex flex-col  h-full w-full custom-container  items-center  relative">
            <div className=" max-w-5xl flex flex-col justify-around  items-center gap-10 mt-32 h-full">
              <h2 className="headerText2 text-center font-extralight">
                Delivering <span className="font-bold">Value</span> through{" "}
                <span className="font-bold">Products</span>,{" "}
                <span className="font-bold">Services</span> and{" "}
                <span className="font-bold">Customized</span> Solutions.
              </h2>
              <p className="flex text-xl text-center   ">
                At Broadspectrum, our comprehensive technological <br />{" "}
                solutions help companies achieve greater success.
              </p>
            </div>

            <div className="flex justify-center h-[12%] mb-0 pb-0 sm:pb-10 absolute bottom-[25%]">
              <button>
                <Lottie
                  options={lottieDefaultOptions}
                  height={160}
                  width={160}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
