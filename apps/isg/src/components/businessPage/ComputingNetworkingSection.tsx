import React, { useState } from "react";
import { motion } from "framer-motion";

const SingleComponent = ({
  title,
  list,
  imageURL,
}: {
  title: string;
  list?: string[];
  imageURL: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {/* desktop */}
      <div
        className="h-[27rem] w-full hidden sm:block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? (
          <motion.div
            animate={{ type: "spring", opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className={`border border-[#82AEC9] w-full rounded-[40px] p-10 h-full ${imageURL} border-transparent `}
          >
            <div className="flex flex-col   h-full justify-end gap-5">
              <div className="h-full  flex items-end">
                <h1
                  className={`text-4xl font-medium my-2  leading-[2.8rem] ${
                    list && "-mb-14 "
                  }`}
                >
                  {title}
                </h1>
              </div>
              {list && (
                <ul className="h-full text-2xl  flex flex-col mb-2 justify-end">
                  {list.map((list, _x) => (
                    <li className="flex items-center gap-1" key={_x}>
                      <img
                        src="/assets/icons/directions-right.svg"
                        alt="get directions"
                        className="w-4"
                      />
                      {list}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ) : (
          <div className="border border-[#82AEC9] w-full rounded-[40px] p-10 h-full  ">
            <div className="flex flex-col   h-full">
              <div className="h-full  flex ">
                <h1 className="text-4xl font-medium mt-2 leading-[2.8rem]">
                  {title}
                </h1>
              </div>
              {list && (
                <ul className="h-full text-2xl  flex flex-col ">
                  {list.map((list, _x) => (
                    <li className="flex items-center gap-1" key={_x}>
                      <img
                        src="/assets/icons/directions-right.svg"
                        alt="get directions"
                        className="w-4"
                      />
                      {list}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      {/* mobilex */}
      <div
        className={`sm:hidden h-[25rem] w-full border border-[#82AEC9] rounded-[45px] relative ${imageURL}  bg-cover bg-center`}
      >
        <div className="flex flex-col justify-end h-full">
          <div className="h-[32%]  bg-[#0C233E]  border-[#82AEC9] rounded-bl-[45px] rounded-br-[45px] p-8">
            <h1
              className={`text-3xl font-medium -mt-5  leading-[2.4rem] ${
                list && " absolute top-[50%]  "
              }`}
            >
              {title}
            </h1>
            {list && (
              <ul className="h-full text-[1.3rem] -mt-5 flex flex-col ">
                {list.map((list, _x) => (
                  <li className="flex items-center gap-2" key={_x}>
                    <img
                      src="/assets/icons/directions-right.svg"
                      alt="get directions"
                      className="w-4"
                    />
                    {list}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const ComputingNetworkingSection = () => {
  return (
    <div className="bg-[#0C233E] py-36">
      <div className="custom-container2 flex flex-col gap-10">
        <div className="">
          <h1 className="headerText1">
            Computing & <br />
            Networking Solution
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 my-10">
          <SingleComponent
            title="Supply of IT equipment"
            list={["Server", "Routers", "Switches, etc"]}
            imageURL="bg-[url('https://res.cloudinary.com/diek2uivi/image/upload/v1686141807/bsl-website/bsl/business/computing-section/image3_kqlfx3.jpg')] bg-cover  bg-bottom"
          />
          <SingleComponent
            title="SD – WAN Design and Deployment"
            imageURL="bg-[url('https://res.cloudinary.com/diek2uivi/image/upload/v1686141807/bsl-website/bsl/business/computing-section/image2_bk5vdv.jpg')] bg-cover bg-center"
          />
          <SingleComponent
            title="Network Design and Deployment"
            imageURL="bg-[url('https://res.cloudinary.com/diek2uivi/image/upload/v1686141807/bsl-website/bsl/business/computing-section/image1_yr1y6d.jpg')] bg-cover bg-right"
          />
        </div>
      </div>
    </div>
  );
};

export default ComputingNetworkingSection;
