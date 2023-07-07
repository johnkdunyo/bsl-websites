import React from "react";

const CustomBackground1 = () => {
  return (
    <div className="absolute  left-0 top-0 right-0 flex flex-col  justify-between  overflow-clip  h-full ">
      {/* <div className=" hidden sm:block border-white h-[40rem] w-[40rem]  circle circle-1 shadow-2xl blur-md"></div> */}
      <div className=" border-red-400 h-[25rem] sm:h-[80rem] w-full sm:w-[80rem] top-[20%] sm:right-[20%]  circle circle-2"></div>
      <div className=" border-green-400 h-[25rem] sm:h-[60rem] w-full sm:w-[60rem]  circle circle-3"></div>
    </div>
  );
};

export default CustomBackground1;
