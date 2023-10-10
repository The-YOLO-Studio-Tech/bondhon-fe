import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const CategoryCart = ({ image, title }: { image: any; title: string }) => {
  return (
    <Link href="/category/slug">
      <div className="relative">
        <Image
          src={image}
          width={295}
          height={252}
          objectFit="cover"
          layout="responsive"
          alt="thumbnail"
        />
      </div>
      <button className="py-2 bg-[#392FA3] text-white leading-[140%] w-full text-center xl:py-5">
        {title}
      </button>
    </Link>
  );
};

export default CategoryCart;
