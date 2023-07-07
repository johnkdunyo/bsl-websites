import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const SingleComponent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Animate.ScaleIn className="w-full border border-[#306FB7] px-8 md:px-10 rounded-[50px] h-[25rem] md:h-[30rem] flex justify-start flex-col text-left py-14 md:py-16 gap-14">
      <div className=" h-[30%]">
        <h1 className="text-[#0071BD] font-bold text-3xl ">{title}</h1>
      </div>
      <div className="paragraphText1 text-[#234222]  h-full flex justify-start items-start">
        <div>{description}</div>
      </div>
    </Animate.ScaleIn>
  );
};

const WeInnovateSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="custom-container">
        <Animate.FadeUp className="text-[#0071BD] text-4xl md:text-7xl font-bold leading-snug md:text-center">
          We innovate to empower through;
        </Animate.FadeUp>

        <div className="flex flex-col md:flex-row mt-20 gap-14 md:gap-20">
          <SingleComponent
            title="Ghanaian Ownership and expertise"
            description="We are a proudly independent Ghanaian company. A demonstration of
        Public Private Partnership (PPP) at work in Ghana to transform the lives
        of Ghanaians."
          />
          <SingleComponent
            title="A Unique network"
            description="As a single network, we offer more reliability with next generation network design that comes with multiple rings for redundancy, faster connections, and tighter security than other available networks on the market."
          />
          <SingleComponent
            title="A Rich Solutions Portfolio"
            description="We provide dependable, affordable, and accessible solutions through innovation and customization for businesses of all sizes to drive growth through ICT solutions."
          />
        </div>
      </div>
    </section>
  );
};

export default WeInnovateSection;
