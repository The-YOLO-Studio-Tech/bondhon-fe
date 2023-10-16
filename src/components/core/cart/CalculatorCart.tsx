import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const CalculatorCart = () => {
  return (
    <div>
      <div className="px-4 bg-[#F4F6F8] md:px-2 xl:px-10">
        <h3 className="text-[#4852AE] text-xl pt-4 font-medium md:pt-7 xl:text-[28px]">
          আপনি কি জানেন! বাড়ি বানাতে কি কি লাগে ?
        </h3>
        <p className="flex gap-1 py-3 items-center text-[#CD2D4A] font-medium text-sm md:py-7 xl:text-[16px]">
          ক্যালকুলেটর এ দেখুন <BsArrowRight />
        </p>
      </div>
      <p className="bg-[#4852AE] h-5"></p>
    </div>
  );
};

export default CalculatorCart;
