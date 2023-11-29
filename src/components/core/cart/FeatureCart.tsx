import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const FeatureCart = ({ data }: { data: any }) => {
  return (
    <div className="relative">
      {data?.find((i: any) => i.sl * 1 == 1)?.blog?.thumbnail_b64 ? (
        <Link href={`/post/${data?.results?.[0]?.content?.feature_post?.title}`}>
          <div className="">
            <Image
              src={data?.find((i: any) => i.sl * 1 == 1)?.blog?.thumbnail_b64}
              width={422}
              height={458}
              layout="responsive"
              objectFit="cover"
              alt="featureCard"
            />
          </div>
          <p className="text-lg left-0 truncate right-0 font-bold absolute bottom-0 bg-[#392FA3] p-5 text-white md:p-6 xl:p-8 xl:text-[28px]">
            {data?.find((i: any) => i.sl * 1 == 1)?.blog?.title}
          </p>
        </Link>
      ) : (
        <div className="w-ful relative">
          <Image
            src="/images/placeHolder.jpeg"
            width={422}
            height={458}
            layout="responsive"
            objectFit="cover"
            alt="featureCard"
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCart;
