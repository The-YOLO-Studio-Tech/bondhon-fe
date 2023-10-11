import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const FeatureCart = ({ data }: { data: any }) => {
  return (
    <div className="relative">
      {data?.results?.[0]?.content?.feature_post ? (
        <Link href={`/post/${data?.results?.[0]?.content?.feature_post?.title}`}>
          <div className="">
            <Image
              src={data?.results?.[0]?.content?.feature_post?.thumbnail}
              width={422}
              height={458}
              layout="responsive"
              objectFit="cover"
              alt="featureCard"
            />
          </div>
          <p className="text-xl left-0 right-0 font-bold absolute bottom-0 bg-[#392FA3] p-5 text-white md:p-6 xl:p-8 xl:text-[32px]">
            {data?.results?.[0]?.content?.feature_post?.title}
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
