import Image from "next/image";
import React from "react";

const WorkPOSSection = () => {
  return (
    <section className="bg-[url('/assets/img/bdp/mobile-pos-bg.svg')] sm:bg-[url('/assets/img/bdp/pos-bg.svg')] h-[30rem] md:h-[86rem] bg-cover  bg-no-repeat   w-full pt-[30%] pb-[20%]  md:pt-[30%] bg-white sm:-mt-[1rem] -mt-[7rem]   z-10 relative  ">
      <div className="w-full custom-container absolute top-28 sm:top-[30%] left-0 right-0">
        <h1 className="text-purple font-bold text-[1.9rem] text-center sm:text-[2.1rem]">
          Works with POS, mobile and web
        </h1>
      </div>
      <div className="bottom-[10%] sm:top-[8%] md:top-[10%] lg:top-[15%] left-0 right-0  absolute  ">
        <img
          src="/assets/img/bdp/pos.png"
          className="w-full h-full  border-red-600"
          alt="pos image"
          width={1920}
          height={1631}
        />
      </div>
    </section>
  );
};

export default WorkPOSSection;
