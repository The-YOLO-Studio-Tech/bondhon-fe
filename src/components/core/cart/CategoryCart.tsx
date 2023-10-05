import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const CategoryCart = () => {
  return (
    <Link href="/category/slug">
      <div className="relative">
        <Image
          src="https://placehold.co/600x400.png?text=Card"
          width={295}
          height={252}
          objectFit="cover"
          layout="responsive"
          alt="thumbnail"
        />
      </div>
      <button className="py-4 bg-[#392FA3] text-white w-full text-center xl:py-6">মুখোমুখি</button>
    </Link>
  );
};

export default CategoryCart;
