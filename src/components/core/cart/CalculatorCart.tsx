import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const CalculatorCart = () => {
  return (
    <div>
      <div className="px-7 bg-[#F4F6F8] xl:px-10">
        <h3 className="text-[#4852AE] text-xl pt-5 font-medium md:pt-7 xl:text-[28px]">
          আপনি কি জানেন! বাড়ি বানাতে কি কি লাগে ?
        </h3>
        <p className="flex gap-1 py-5 items-center text-[#CD2D4A] font-medium text-sm md:py-7 xl:text-[16px]">
          ক্যালকুলেটর এ দেখুন <BsArrowRight />
        </p>
      </div>
      <p className="bg-[#4852AE] h-5"></p>
    </div>
  );
};

export default CalculatorCart;
