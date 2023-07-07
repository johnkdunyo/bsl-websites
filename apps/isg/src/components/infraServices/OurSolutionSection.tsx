import React from "react";
import useMeasure from "react-use-measure";
import { Animate } from "../animations/ScrollAnimator";

// const SingleSection = ({
//   title,
//   description,
//   className,
//   imgURL,
// }: {
//   title: string;
//   description: string;
//   className?: string | string[];
//   imgURL: string;
// }) => {
//   const [container, { height }] = useMeasure();
//   console.log("debug", height);
//   return (
//     <div
//       className={`relative  border-yellow-500 mb-8  ${className}`}
//       style={{ minHeight: `${height + 225}px` }}
//     >
//       <img
//         src={`/assets/img/isg/${imgURL}`}
//         className="rounded-[50px] object-cover  w-full h-[22rem] px-2 absolute z-10"
//       />
//       <div
//         className=" h-fit bg-gradient-to-b to-[#1D365A] from-[#AB2346]  rounded-[40px] absolute w-full top-[14rem] pt-[9rem] pb-8"
//         ref={container}
//       >
//         <div className=" text-white px-4 flex flex-col gap-6">
//           <h1 className="font-bold text-4xl leading-normal">{title}</h1>
//           <div className="text-base leading-normal">{description}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

const SingleSection = ({
  title,
  description,
  className,
  imgURL,
  txtPosition,
}: {
  title: string;
  description: string;
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
          src={`/assets/img/isg/${imgURL}`}
          className="rounded-[50px] object-cover  w-full h-[22rem] px-2 absolute z-10"
        />
        <div
          className=" h-fit bg-gradient-to-b to-[#1D365A] from-[#AB2346]  rounded-[40px] absolute w-full top-[14rem] pt-[9rem] pb-8"
          ref={container}
        >
          <div className=" text-white px-4 flex flex-col gap-6">
            <h1
              className="font-bold text-4xl leading-normal"
              dangerouslySetInnerHTML={{ __html: String(title) }}
            ></h1>
            <div
              className="text-base leading-normal"
              dangerouslySetInnerHTML={{ __html: String(description) }}
            ></div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-full w-full justify-between  bg-gradient-to-l to-[#1D365A] from-[#AB2346]  rounded-[80px] p-7  ">
        <div
          className={`text-white w-full    ${
            txtPosition === "right" && "order-last"
          } `}
        >
          <div className="flex flex-col gap-4 justify-center  h-full  px-16 ">
            <h1
              className="font-bold text-6xl  leading-[4.5rem]"
              dangerouslySetInnerHTML={{ __html: String(title) }}
            ></h1>
            <div
              className="text-xl leading-normal"
              dangerouslySetInnerHTML={{ __html: String(description) }}
            ></div>
          </div>
        </div>
        <div className="w-full ">
          <img
            src={`/assets/img/isg/${imgURL}`}
            className="rounded-[80px] object-cover h-[30rem]  w-full   "
          />
        </div>
      </div>
    </Animate.FadeUp>
  );
};

const OurSolutionSection = () => {
  return (
    <section className="py-20  bg-white">
      <div className="custom-container">
        <div className=" w-full">
          <Animate.FadeUp className="text-primary font-bold text-4xl md:hidden">
            Our <br />
            Solutions
          </Animate.FadeUp>
          <Animate.FadeUp className="text-primary font-bold text-4xl hidden md:block">
            Our Solutions
          </Animate.FadeUp>
          <p className="text-primary mt-10">
            We are your go-to Fibre maintenance team providing you with Seamless
            connectivity and uninterrupted performance!
          </p>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-12 md:gap-20 ">
          <SingleSection
            title="Fibre Infrastructure Deployment"
            imgURL="fibre.jpeg"
            description="At ISG, we specialize in providing comprehensive fibre infrastructure deployment services to meet the growing demands of the telecommunications industry. Our team of experts is highly experienced in designing, deploying, and maintaining fibre optic networks, ensuring that our clients receive the highest quality solutions."
          />

          <SingleSection
            title="Microwave <br/> Radio Deployment"
            imgURL="microwave.jpg"
            txtPosition={"right"}
            description="As a trusted fiber maintenance company, we offer expert installation and configuration of microwave radio links. Our streamlined approach eliminates the need for costly infrastructure investments, allowing expansion of network coverage quickly and efficiently."
          />
          <SingleSection
            title="LAN Infrastructure Deployments"
            imgURL="lan.jpeg"
            description="As a leading provider of fiber maintenance solutions, we specialize in the seamless installation and configuration of Local Area Networks (LANs) for businesses. Our team ensures efficient deployment, eliminating the need for in-house resources. Experience reliable and high-speed connectivity, smooth data transfer, collaboration, and enhanced productivity today."
          />
          <SingleSection
            title="Data Centre <br/> Build and Management"
            imgURL="datacenter.jpeg"
            txtPosition={"right"}
            description="We specialize in designing, constructing, and managing state-of-the-art data centers tailored to meet your organization&lsquo;s unique needs. With our proactive monitoring and maintenance services, you can trust that your data centre will operate at peak efficiency, minimizing downtime and ensuring uninterrupted operations."
          />
          <SingleSection
            title="Service Maintenance <br/>and Support"
            imgURL="service.jpeg"
            description="Our expert technicians are available 24/7 to address any issues, minimize downtime and maximize productivity. We run regular maintenance checks and timely updates, to that your systems are running at peak efficiency. Trust us to deliver prompt and reliable support, allowing you to focus on your core business activities with peace of mind."
          />
        </div>
      </div>
    </section>
  );
};

export default OurSolutionSection;
