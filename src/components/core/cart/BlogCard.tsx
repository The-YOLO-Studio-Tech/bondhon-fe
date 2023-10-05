import Image from 'next/legacy/image';
import React from 'react';

const BlogCard = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="https://placehold.co/600x400.png?text=Card"
          width={295}
          height={239}
          layout="responsive"
          objectFit="cover"
          alt="thumbnail"
        />
      </div>
      <div className="pl-4 pb-4 pt-3 pr-3 bg-[#F9F9F9] border border-[#CACACA] xl:pl-8 xl:pb-8 xl:pt-5 xl:pr-4">
        <span className="text-xs p-2 bg-[#E4EAEF] rounded-md xl:text-sm">মূল রচনা</span>
        <h3 className="font-medium text-[#070A1F] py-2 xl:pt-5 xl:pb-4 xl:text-xl">
          শিকড় থেকে সুউচ্চ শিখরে
        </h3>
        <p className="text-[#4E4E4E] text-xs xl:text-[15px]">
          বাংলাদেশের জনসংখ্যা এখন প্রায় ১৭ কোটি। এদের মধ্যে মানসিক স্বাস্থ্যগত
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
