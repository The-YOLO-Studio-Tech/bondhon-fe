import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const CategoryCart = ({ image, title, id }: { image: any; title: string; id: string }) => {
  return (
    <Link href={`/blog/?c_id=${id}`}>
      <div className="relative">
        <Image
          src={image}
          width={295}
          height={263}
          objectFit="cover"
          layout="responsive"
          alt="thumbnail"
        />
      </div>
      <button className="py-2 bg-[#392FA3] truncate text-white leading-[140%] font-medium w-full text-center px-2 md:px-3 xl:text-xl xl:px-5 xl:py-3">
        {title}
      </button>
    </Link>
  );
};

export default CategoryCart;
