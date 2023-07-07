import SiteLayout from "@/components/Layout/SiteLayout";
import CustomBackground1 from "@/components/animations/CustomBackground1";
import CustomInput from "@/components/uiComponents/CustomInput";
import React, { useState } from "react";

interface IEnquiryTypeData {
  id: number;
  name: string;
}

const enquiryTypeData: IEnquiryTypeData[] = [
  {
    id: 1,
    name: "General",
  },
  {
    id: 2,
    name: "New Business",
  },
  {
    id: 3,
    name: "Career",
  },
];

const Enquiry = () => {
  const [currentEnquiryType, setCurrentEnquiryType] =
    useState<IEnquiryTypeData>(enquiryTypeData[1]);

  const EnquiryTypeButton = ({ enquiry }: { enquiry: IEnquiryTypeData }) => {
    return (
      <div className="w-full relative  h-9">
        <button
          className={`w-full border ${
            currentEnquiryType.id === enquiry.id
              ? "border-[#AB2346]"
              : "border-[#1D365A]"
          }  rounded-[10px] h-full text-[#1D365A] text-xs  flex items-center justify-center`}
          onClick={() => setCurrentEnquiryType(enquiry)}
        >
          {enquiry.name}
        </button>
        {currentEnquiryType.id === enquiry.id && (
          <img
            src="/assets/icons/enquiry-active.svg"
            className="absolute left-1/2 right-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </div>
    );
  };

  return (
    <SiteLayout pageName={"Enquiry"}>
      <section className="bg-[#0C233E] h-full   relative">
        <CustomBackground1 />
        <div className=" custom-container2 pt-32 pb-24">
          <div className="flex flex-col sm:flex-row  gap-10">
            <div className="w-full px-4 sm:px-0">
              <h1 className=" text-3xl sm:text-8xl font-medium">
                <span className="sm:font-extralight"> Make an </span>{" "}
                <span className="sm:font-bold">enquiry</span>
              </h1>

              <div className="hidden sm:flex flex-col mt-12 gap-10">
                <div>
                  <h1 className="text-[#82AEC9] uppercase tracking-widest text-2xl font-medium">
                    Contact us
                  </h1>
                  <h1 className="mt-3 text-[1.5rem]">Broadspectrum Ltd.</h1>
                  <h1 className="text-[1.5rem] mt-4">
                    HEAD OFFICE
                    <br />
                    No 24 Botwe <br />
                    Dzorwulu Road, <br />
                    Dzorwulu-Accra
                  </h1>
                </div>

                <div>
                  <h1 className="text-[#82AEC9] uppercase tracking-widest text-2xl font-medium">
                    Phone
                  </h1>
                  <h1 className="mt-3 text-[1.5rem]">+233(0) 593 808 064</h1>
                </div>

                <div>
                  <h1 className="text-[#82AEC9] uppercase tracking-widest text-2xl font-medium">
                    Email
                  </h1>
                  <h1 className="mt-3 text-[1.5rem]">contact@bsl.com</h1>
                </div>
              </div>
            </div>

            <div className="w-full  bg-white h-full rounded-[30px] p-6 z-10">
              <div className="w-full   mb-14">
                <h1 className="text-[#1D365A] font-semibold text-base">
                  Enquiry Type
                </h1>

                <div className="flex justify-between w-full gap-2 mt-8">
                  {enquiryTypeData.map((enquiry, _x) => (
                    <EnquiryTypeButton enquiry={enquiry} key={enquiry.id} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-5 ">
                <CustomInput placeHolder="Name" />
                <CustomInput placeHolder="Email" />
                <CustomInput placeHolder="Phone" />
                <CustomInput placeHolder="Company" />

                <div>
                  <textarea
                    name=""
                    id=""
                    className=" px-4 pt-3 text-sm w-full bg-white rounded-[18px] text-[#1D365A]  border border-[#1D365A] "
                    rows={10}
                    placeholder="Your message here"
                  />
                </div>

                <div className=" flex flex-col items-center mt-5">
                  <button className="custom-button1 px-6">SEND Enquiry</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Enquiry;
