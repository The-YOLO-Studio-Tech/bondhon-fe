import Image from 'next/legacy/image';
import React from 'react';

const FeatureCart = () => {
  return (
    <div className="relative">
      <div className="">
        <Image
          src="https://placehold.co/600x400/png"
          width={422}
          height={458}
          layout="responsive"
          objectFit="cover"
          alt="featureCard"
        />
      </div>
      <p className="text-xl left-0 right-0 font-bold absolute bottom-0 bg-[#392FA3] p-5 text-white md:p-6 xl:p-8 xl:text-[32px]">
        শিকড় থেকে সুউচ্চ শিখরে শিকড়
      </p>
    </div>
  );
};

export default FeatureCart;
