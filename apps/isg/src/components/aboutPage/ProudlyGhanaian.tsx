import React from "react";
import { Animate } from "../animations/ScrollAnimator";
import Image from "next/image";

const ProudlyGhanaian = () => {
  return (
    <section className=" bg-white ">
      <div className="custom-container h-full flex flex-col sm:flex-row justify-between py-10 gap-16 ">
        <div className=" w-full  -mt-24 sm:-mt-[9rem] sm:order-last z-10">
          <Image
            src="https://res.cloudinary.com/diek2uivi/image/upload/v1686065678/bsl-website/bsl/about/about1_nvwoax.jpg"
            className="w-full h-full"
            height={2000}
            width={1500}
            alt="proudly ghanaian"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/diek2uivi/image/upload/v1686065678/bsl-website/bsl/about/about1_nvwoax.jpg"
          />
        </div>
        <div className="  w-full flex justify-center items-center ">
          <div className="flex flex-col gap-4  sm:-mt-10">
            <Animate.FadeUp>
              <h1 className="text-[#1D365A] headerText1">
                Proudly <br /> Ghanaian
              </h1>
            </Animate.FadeUp>

            <Animate.FadeUp>
              <p className="text-[#1D365A] paragraphText1">
                Broadspectrum Limited is a Ghanaian information communication
                technology company that is active in the technological industry.
                It has partnered with GCB Bank Limited to launch the first
                bank-backed mobile money service in Ghana and has over 400,000
                users. In partnership with the government of Ghana.
              </p>
            </Animate.FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProudlyGhanaian;
