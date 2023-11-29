import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
// data?.results?.content?.feature_post_category1
const ThumnileCategoryCart = ({ data }: { data: any }) => {
  return (
    <>
      {data?.category ? (
        <Link
          href={`/blog/${data?.category?.title}`}
          className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
        >
          <h5 className="col-span-5 font-medium p-1 text-center xl:text-xl">
            {data?.category?.title}
          </h5>
          <div className="relative col-span-6 w-full h-[100px] md:h-full">
            <Image src={data?.category?.thumbnail_b64} objectFit="cover" layout="fill" alt="img" />
          </div>
        </Link>
      ) : (
        <div className="relative w-full h-[100px] md:h-full">
          <Image src="/images/placeHolder.jpeg" layout="fill" objectFit="cover" alt="placeholder" />
        </div>
      )}
    </>
  );
};

export default ThumnileCategoryCart;
