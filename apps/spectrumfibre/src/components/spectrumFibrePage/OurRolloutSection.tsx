import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const OurRolloutSection = () => {
  return (
    <section className="bg-white">
      <div className="h-full w-full pt-10 pb-20 custom-container text-[#234222] md:hidden flex flex-col gap-4">
        <Animate.FadeUp className="text-[#0071BD] font-bold text-4xl">
          Our Rollout
        </Animate.FadeUp>
        <Animate.FadeUp>
          <div className="">
            We are exclusively the backbone Fibre infrastructure in the Western
            Region and have 4000+km of Fibre optic cable covering the Western,
            Eastern and Northern Corridors of the country and we also have Fibre
            infrastructure present in all the 16 regions of Ghana.
          </div>
        </Animate.FadeUp>

        <div className="my-4">
          <img
            src="/assets/img/spectrum/sfc-map.svg"
            className="object-cover h-full w-full"
          />
        </div>
        <Animate.FadeUp>
          <div className="text-[#0071BD] mb-4 tracking-widest font-medium text-lg">
            CONNECTING THE LANDLOCKED COUNTRIES OF WEST AFRICA
          </div>
          <div>
            Spectrum Fibre owns fibre infrastructure at the border towns of Côte
            d’Ivoire (Elubo), Burkina Faso (Paga and Cinkasse) and Togo (Aflao).
          </div>
        </Animate.FadeUp>
      </div>

      <div className="h-full w-full py-20 custom-container text-[#234222] hidden md:flex justify-between">
        <div className="w-[30%] flex flex-col justify-between  py-32">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#0071BD] font-bold text-5xl">Our Rollout</h1>
            <Animate.FadeUp className="text-base">
              We are exclusively the backbone Fibre infrastructure in the
              Western Region and have 4000+km of Fibre optic cable covering the
              Western, Eastern and Northern Corridors of the country and we also
              have Fibre infrastructure present in all the 16 regions of Ghana.
            </Animate.FadeUp>
          </div>
          <Animate.FadeUp className="flex flex-col gap-4">
            <div className="text-[#0071BD] font-medium text-xl tracking-widest">
              CONNECTING THE LANDLOCKED COUNTRIES OF WEST AFRICA
            </div>
            <div>
              Spectrum Fibre owns fibre infrastructure at the border towns of
              Côte d’Ivoire (Elubo), Burkina Faso (Paga and Cinkasse) and Togo
              (Aflao).
            </div>
          </Animate.FadeUp>
        </div>

        <div className="w-[60%] ">
          <img
            src="/assets/img/spectrum/sfc-map.svg"
            className="object-cover  w-full h-full"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default OurRolloutSection;
