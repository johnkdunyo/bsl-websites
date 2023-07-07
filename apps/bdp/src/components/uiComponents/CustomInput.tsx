import React from "react";

const CustomInput = ({ placeHolder }: { placeHolder: string }) => {
  return (
    <div>
      <input
        className=" px-4 h-11 text-sm w-full bg-white rounded-[18px] text-[#1D365A] py-0.5 border border-[#1D365A]"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default CustomInput;
