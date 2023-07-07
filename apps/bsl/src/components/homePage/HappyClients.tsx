import React from "react";
import Lottie from "react-lottie";
import FolderLottieData from "../../../public/assets/lottie/folder.json";
import ProductLottieData from "../../../public/assets/lottie/product.json";
import SmileLottieData from "../../../public/assets/lottie/smile.json";
import StaffLottieData from "../../../public/assets/lottie/staff.json";
import Counter from "../uiComponents/Counter";
import { Animate } from "../animations/ScrollAnimator";

const SingleMobileCustomCard = ({
  title,
  value,
  animationData,
}: {
  title: string;
  value: number;
  animationData: "folder" | "product" | "smile" | "staff";
}) => {
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      animationData === "folder"
        ? FolderLottieData
        : animationData === "product"
        ? ProductLottieData
        : animationData === "smile"
        ? SmileLottieData
        : animationData === "staff" && StaffLottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center  w-full h-full  justify-center">
      <div className=" -mb-2 sm:hidden ">
        <Lottie options={lottieDefaultOptions} height={120} width={120} />
      </div>
      <div className="  hidden sm:block">
        <Lottie options={lottieDefaultOptions} height={160} width={160} />
      </div>
      <h1 className="text-[#AB2346] font-light text-2xl sm:text-7xl">
        <Counter end={value} decimals={undefined} />+
      </h1>
      <p className="text-[#1D365A]  text-sm sm:text-xl mt-1 sm:mt-3">{title}</p>
    </div>
  );
};

const HappyClients = () => {
  return (
    <section className=" happyClientSection">
      {/* mobile */}
      <Animate.FadeUp>
        <div className="py-20 sm:hidden custom-container grid grid-cols-2 gap-10">
          <SingleMobileCustomCard
            title="Happy Clients"
            value={15}
            animationData={"smile"}
          />
          <SingleMobileCustomCard
            title="Projects"
            value={10}
            animationData={"product"}
          />
          <SingleMobileCustomCard
            title="Expert People"
            value={60}
            animationData={"staff"}
          />
          <SingleMobileCustomCard
            title="Portfolio"
            value={20}
            animationData={"folder"}
          />
        </div>
      </Animate.FadeUp>

      <div className="hidden sm:flex custom-container h-[40rem]">
        <div className=" flex justify-center w-full h-full">
          <SingleMobileCustomCard
            title="Happy Clients"
            value={15}
            animationData={"smile"}
          />
          <SingleMobileCustomCard
            title="Projects"
            value={10}
            animationData={"product"}
          />
          <SingleMobileCustomCard
            title="Expert People"
            value={60}
            animationData={"staff"}
          />
          <SingleMobileCustomCard
            title="Portfolio"
            value={20}
            animationData={"folder"}
          />
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
