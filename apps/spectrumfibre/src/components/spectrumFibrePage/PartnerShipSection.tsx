import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const PartnerShipSection = () => {
  return (
    <section className="flex flex-col justify-between ">
      <div className="w-fulll bg-gradient-to-r from-[#17449A] to-[#0071BD] h-[30rem] md:h-[40rem]">
        <div className="md:hidden">
          <div className=" custom-container mt-14 ">
            <Animate.FadeUp className="  text-center paragraphText1 text-white ">
              Spectrum Fibre was formed out of a Public Private Partnership
              between Broadspectrum Limited and the Government of Ghana through
              the Ghana Infrastructure Investment Fund (GIIF) in 2017.
            </Animate.FadeUp>
          </div>
          <img src="/assets/img/spectrum/sfc-collab.png" className="" />
        </div>
        <div className=" hidden md:flex w-full   h-full justify-center items-center relative ">
          <Animate.FadeUp className="  text-center paragraphText1 text-white max-w-sm ">
            Spectrum Fibre was formed out of a Public Private Partnership
            between Broadspectrum Limited and the Government of Ghana through
            the Ghana Infrastructure Investment Fund (GIIF) in 2017.
          </Animate.FadeUp>
          <img
            src="/assets/img/spectrum/sfc-collab-desktop.png"
            className="absolute inset-0 top-[8rem]"
          />
        </div>
      </div>
      <div className="w-fulll  bg-[url('/assets/img/spectrum/sfc-3.jpeg')] h-[45rem] md:h-[38rem] bg-cover  bg-center top-0 ">
        <div className="backdrop-brightness-50 sm:backdrop-brightness-[0.8] h-full w-full">
          <div className="w-full h-full flex flex-col justify-end  items-center custom-container  pb-24">
            <Animate.FadeUp className="paragraphText1 text-center max-w-2xl  w-full">
              Spectrum Fibre was formed out of a Public Private Partnership
              between Broadspectrum Limited and the Government of Ghana through
              the Ghana Infrastructure Investment Fund (GIIF) in 2017.
            </Animate.FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerShipSection;
