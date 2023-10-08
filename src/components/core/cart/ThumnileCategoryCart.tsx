import Image from 'next/legacy/image';
import React from 'react';

const ThumnileCategoryCart = () => {
  return (
    <div className=" border flex w-full items-center border-[#392FA3]">
      <h5 className="px-2 text-sm font-semibold xl:text-lg xl:px-6">রেস্টুরেন্ট ইন্টেরিয়র</h5>
      <div className="relative w-full h-[100px] md:h-full">
        <Image
          src="https://placehold.co/600x400.png?text=Hello+World"
          objectFit="cover"
          layout="fill"
          alt="img"
        />
      </div>
    </div>
  );
};

export default ThumnileCategoryCart;
