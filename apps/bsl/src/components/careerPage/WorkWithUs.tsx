import React from "react";
import CustomBackground1 from "../animations/CustomBackground1";
import CustomInput from "../uiComponents/CustomInput";
import { Animate } from "../animations/ScrollAnimator";

const WorkWithUs = () => {
  return (
    <section className="py-10 pb-20  bg-[#11233C] relative ">
      <CustomBackground1 />
      <div className="z-10">
        <div className="custom-container flex flex-col sm:flex-row justify-between gap-10">
          <div className="flex flex-col gap-2 w-full px-5 sm:px-0">
            {/* <h1 className="headerText1">Work with us</h1> */}
            <Animate.FadeUp className="headerText1">
              Work with us
            </Animate.FadeUp>
            <Animate.FadeUp className="paragraphText1">
              Our forward-thinking Group believes in the value and talent of its
              people. Browse the available positions or send an open application
              by attaching your CV.
            </Animate.FadeUp>
          </div>
          <div className="w-full border bg-white h-full rounded-[30px] p-8 z-10">
            <div className="flex flex-col justify-between gap-4 ">
              <CustomInput placeHolder="Area of Interest" />
              <CustomInput placeHolder="First Name" />
              <CustomInput placeHolder="Last Name" />
              <CustomInput placeHolder="Email" />
              <div className="h-12 text-sm w-full bg-white rounded-[18px] text-[#1D365A]  border border-[#1D365A] flex items-center px-4">
                <input
                  type="file"
                  className="w-full   border-red-600 flex items-center  py-1 text-[#1D365A]"
                />
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  className=" px-4 pt-3 text-sm w-full bg-white rounded-[18px] text-[#1D365A]  border border-[#1D365A] "
                  rows={10}
                  placeholder="Your message here"
                />
              </div>
              <div className=" -mt-3 flex  items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info checkbox-sm sm:checkbox-md"
                />
                <p className="text-[#1D365A]">Accept Privacy *</p>
              </div>

              <div className=" flex flex-col items-center">
                <button className="custom-button1 px-6">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
