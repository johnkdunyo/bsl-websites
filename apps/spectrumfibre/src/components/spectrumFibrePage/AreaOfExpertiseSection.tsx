import React from "react";
import useMeasure from "react-use-measure";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Animate } from "../animations/ScrollAnimator";

const SingleSection = ({
  title,
  description,
  className,
  imgURL,
  txtPosition,
}: {
  title: string;
  description: string[];
  className?: string | string[];
  imgURL: string;
  txtPosition?: "left" | "right";
}) => {
  const [container, { height }] = useMeasure();
  console.log("debug", height);
  return (
    <Animate.FadeUp>
      <div
        className={`relative  border-yellow-500 mb-8 md:hidden  ${className}`}
        style={{ minHeight: `${height + 225}px` }}
      >
        <img
          src={`/assets/img/spectrum/${imgURL}`}
          className="rounded-[50px] object-cover  w-full h-[22rem] px-2 absolute z-10"
        />
        <div
          className=" h-fit bg-[#EDEDED]  rounded-[40px] absolute w-full top-[14rem] pt-[9rem] pb-8"
          ref={container}
        >
          <div className=" text-[#234222] px-4 flex flex-col gap-6">
            <h1 className="font-bold text-4xl leading-normal text-[#0071BD]">
              {title}
            </h1>
            <div className="text-xl leading-normal ">
              {description.map((item, _x) => (
                <div className="flex items-start  gap-3 my-1" key={_x}>
                  <div className="mt-1">
                    <HiOutlineArrowNarrowRight size={24} />{" "}
                  </div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex h-full w-full justify-between  bg-[#EDEDED]  rounded-[80px] p-5  ">
        <div
          className={`text-[#234222] w-full    ${
            txtPosition === "right" && "order-last"
          } `}
        >
          <div className="flex flex-col gap-4 justify-center  h-full  px-16 ">
            <h1 className="font-bold text-6xl text-[#0071BD] leading-[4.5rem]">
              {title}
            </h1>
            <div className="text-xl leading-normal">
              {description.map((item, _x) => (
                <div className="flex   gap-3 items-start my-2" key={_x}>
                  <div className="mt-1">
                    <HiOutlineArrowNarrowRight size={24} />
                  </div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full ">
          <img
            src={`/assets/img/spectrum/${imgURL}`}
            className="rounded-[80px] object-cover h-[35rem]  w-full   "
          />
        </div>
      </div>
    </Animate.FadeUp>
  );
};

const AreaOfExpertiseSection = () => {
  return (
    <section className="py-20  bg-white">
      <div className="custom-container">
        <div>
          <Animate.FadeUp className="text-[2.9rem] md:text-8xl leading-[4rem] md:leading-[7rem] text-transparent bg-clip-text font-bold bg-gradient-to-l from-[#306FB7] to-[#2A4125] px-6 sm:px-0 ">
            Our Area of Expertise
          </Animate.FadeUp>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-12 md:gap-20 ">
          <SingleSection
            title="Dedicated Internet"
            imgURL="dedicated-internet.jpeg"
            description={[
              "Suitable for ISPs, schools, research institutions, banks, government organizations, and any other institution that requires high performance internet.",
            ]}
          />

          <SingleSection
            title="Backhaul Solutions"
            imgURL="backhaul.jpeg"
            txtPosition={"right"}
            description={[
              "Suitable for ISPs and Telecom service providers such as GLO, Prodata, etc.",
              "Support topologies such as point-to-point, point-to-multipoint, and multipoint-to-multipoint Managed Wide Area Networks (WAN)",
              "Suitable for organizations that want to connect several locations over a large geographic area. E.g., Banks, Government Institutions, Retail chain of Shops, Insurance companies etc",
            ]}
          />
          <SingleSection
            title="Wavelength Solutions"
            imgURL="wavelength.jpeg"
            description={[
              "Delivered over our state-of-the-art Dense Wave Division Multiplexing (DWDM) network",
              "An ideal solution for data center backup and recovery sites, research institutions, and wholesale internet carriers",
            ]}
          />
          <SingleSection
            title="Dark Fiber"
            imgURL="dark-fibre.jpeg"
            txtPosition={"right"}
            description={[
              "Suitable for telcos, and wholesale internet carriers",
            ]}
          />
          <SingleSection
            title="Software-Defined Wide Area Network"
            imgURL="software.jpeg"
            description={[
              "Suitable for telcos, and wholesale internet carriers",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default AreaOfExpertiseSection;
