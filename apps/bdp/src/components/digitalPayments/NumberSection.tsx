import React from "react";

import Lottie from "react-lottie";
import Counter from "../uiComponents/Counter";
import PartnersLottieData from "../../../public/assets/lottie/bdp/partners.json";
import ContactsLottieData from "../../../public/assets/lottie/bdp/contacts.json";
import TransactionsLottieData from "../../../public/assets/lottie/bdp/transaction.json";

const SingleMobileCustomCard = ({
  title,
  value,
  animationData,
}: {
  title: string;
  value: number;
  animationData: "partners" | "contacts" | "transactions";
}) => {
  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      animationData === "partners"
        ? PartnersLottieData
        : animationData === "contacts"
        ? ContactsLottieData
        : animationData === "transactions" && TransactionsLottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-full h-full  ">
      <div className="flex items-center  justify-center  gap-6 md:gap-8 md:flex-col md:text-center px-10 md:px-0">
        <div className="flex items-center justify-center ">
          <div className=" md:hidden ">
            <Lottie options={lottieDefaultOptions} height={70} width={85} />
          </div>
          <div className="  hidden md:block">
            <Lottie options={lottieDefaultOptions} height={90} width={100} />
          </div>
        </div>
        <div className=" w-full">
          <h1 className="text-ruby font-normal md:font-light text-3xl md:text-5xl">
            <Counter end={value} decimals={undefined} />+
          </h1>
          <p className="text-[#606060] text-sm md:text-base font-medium  mt-1 md:mt-3">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const NumberSection = () => {
  return (
    <section className="bg-white pb-28 pt-10 md:py-40 ">
      <div className="custom-container flex flex-col md:flex-row justify-between md:gap-4  gap-10">
        <SingleMobileCustomCard
          title="Customers"
          value={500000}
          animationData={"contacts"}
        />
        <SingleMobileCustomCard
          title="Transactions"
          value={700000}
          animationData={"transactions"}
        />
        <SingleMobileCustomCard
          title="Partners & clients"
          value={5}
          animationData={"partners"}
        />
      </div>
    </section>
  );
};

export default NumberSection;
