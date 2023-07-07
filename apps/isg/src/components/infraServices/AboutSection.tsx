import React from "react";
import { Animate } from "../animations/ScrollAnimator";

const AboutSection = () => {
  return (
    <section className="bg-white pb-16">
      <div className="custom-container flex flex-col justify-between py-16  md:py-10 w-full  gap-16">
        <div className="w-full">
          <Animate.FadeUp className="text-ruby font-medium text-xl  text-center tracking-widest w-full">
            A SUBSIDIARY OF BROADSPECTRUM
          </Animate.FadeUp>
        </div>

        <div className=" w-full flex flex-col md:flex-row md:gap-10 gap-0">
          <div className="w-full md:w-3/5">
            <img src="/assets/img/isg/isg1.jpeg" />
          </div>
          <div className="w-full md:w-2/5 mt-[10%]">
            <Animate.FadeUp className="text-primary text-base   leading-relaxed px-2 md:px-0">
              At ISG, we recognize the critical role that reliable and efficient
              communication networks play in today`&lsquo;s interconnected
              world. We are dedicated to delivering top-notch solutions that
              empower businesses to thrive in the digital landscape. Our
              commitment lies in understanding the unique needs of each client
              and providing tailored, workable solutions that surpass
              expectations.
              <br />
              <br />
              With our extensive expertise and industry knowledge, we stay at
              the forefront of technological advancements to offer the most
              innovative and effective solutions for our clients. Whether
              it`&lsquo;s deploying cutting-edge microwave and radio systems,
              maintaining fiber infrastructure, or building and managing data
              centers, we are driven by a passion for excellence in every aspect
              of our work.
            </Animate.FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
