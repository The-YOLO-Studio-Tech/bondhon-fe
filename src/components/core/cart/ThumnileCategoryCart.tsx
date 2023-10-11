import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
// data?.results?.content?.feature_post_category1
const ThumnileCategoryCart = ({ data, categoryNum }: { data: any; categoryNum: string }) => {
  return (
    <>
      {categoryNum === 'feature_post_category1' &&
        (data?.results?.[0]?.content?.feature_post_category1 ? (
          <Link
            href={`/blog/${data?.results?.[0]?.content?.feature_post_category1?.title}`}
            className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
          >
            <h5 className="col-span-5 text-sm font-semibold text-center xl:text-lg">
              {data?.results?.[0]?.content?.feature_post_category1?.title}
            </h5>
            <div className="relative col-span-6 w-full h-[100px] md:h-full">
              <Image
                src={data?.results?.[0]?.content?.feature_post_category1?.thumbnail}
                objectFit="cover"
                layout="fill"
                alt="img"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-[100px] md:h-full">
            <Image
              src="/images/placeHolder.jpeg"
              layout="fill"
              objectFit="cover"
              alt="placeholder"
            />
          </div>
        ))}
      {categoryNum === 'feature_post_category2' &&
        (data?.results?.[0]?.content?.feature_post_category2 ? (
          <Link
            href={`/blog/${data?.results?.[0]?.content?.feature_post_category2?.title}`}
            className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
          >
            <h5 className="col-span-5 text-sm font-semibold text-center xl:text-lg">
              {data?.results?.[0]?.content?.feature_post_category2?.title}
            </h5>
            <div className="relative col-span-6 w-full h-[100px] md:h-full">
              <Image
                src={data?.results?.[0]?.content?.feature_post_category2?.thumbnail}
                objectFit="cover"
                layout="fill"
                alt="img"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-[100px] md:h-full">
            <Image
              src="/images/placeHolder.jpeg"
              layout="fill"
              objectFit="cover"
              alt="placeholder"
            />
          </div>
        ))}
      {categoryNum === 'feature_post_category3' &&
        (data?.results?.[0]?.content?.feature_post_category3 ? (
          <Link
            href={`/blog/${data?.results?.[0]?.content?.feature_post_category3?.title}`}
            className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
          >
            <h5 className="col-span-5 text-sm font-semibold text-center xl:text-lg">
              {data?.results?.[0]?.content?.feature_post_category3?.title}
            </h5>
            <div className="relative col-span-6 w-full h-[100px] md:h-full">
              <Image
                src={data?.results?.[0]?.content?.feature_post_category3?.thumbnail}
                objectFit="cover"
                layout="fill"
                alt="img"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-[100px] md:h-full">
            <Image
              src="/images/placeHolder.jpeg"
              layout="fill"
              objectFit="cover"
              alt="placeholder"
            />
          </div>
        ))}
      {categoryNum === 'feature_post_category4' &&
        (data?.results?.[0]?.content?.feature_post_category4 ? (
          <Link
            href={`/blog/${data?.results?.[0]?.content?.feature_post_category4?.title}`}
            className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
          >
            <h5 className="col-span-5 text-sm font-semibold text-center xl:text-lg">
              {data?.results?.[0]?.content?.feature_post_category4?.title}
            </h5>
            <div className="relative col-span-6 w-full h-[100px] md:h-full">
              <Image
                src={data?.results?.[0]?.content?.feature_post_category4?.thumbnail}
                objectFit="cover"
                layout="fill"
                alt="img"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full h-[100px] md:h-full">
            <Image
              src="/images/placeHolder.jpeg"
              layout="fill"
              objectFit="cover"
              alt="placeholder"
            />
          </div>
        ))}
      {categoryNum === 'feature_post_category20' &&
        (data?.results?.[0]?.content?.feature_post_category20 ? (
          <Link
            href={`/blog/${data?.results?.[0]?.content?.feature_post_category20?.title}`}
            className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
          >
            <h5 className="col-span-5 text-sm font-semibold text-center xl:text-lg">
              {data?.results?.[0]?.content?.feature_post_category20?.title}
            </h5>
            <div className="relative col-span-6 w-full">
              <Image
                src={data?.results?.[0]?.content?.feature_post_category20?.thumbnail}
                objectFit="cover"
                layout="responsive"
                width={159}
                height={146}
                alt="img"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full">
            <Image
              src="/images/placeHolder.jpeg"
              layout="responsive"
              width={295}
              height={146}
              objectFit="cover"
              alt="placeholder"
            />
          </div>
        ))}
      {categoryNum === 'feature_post_category21' &&
        (data?.results?.[0]?.content?.feature_post_category21 ? (
          <Link
            href={`/blog/${data?.results?.[0]?.content?.feature_post_category21?.title}`}
            className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
          >
            <h5 className="col-span-5 text-sm font-semibold text-center xl:text-lg">
              {data?.results?.[0]?.content?.feature_post_category21?.title}
            </h5>
            <div className="relative col-span-6 w-full">
              <Image
                src={data?.results?.[0]?.content?.feature_post_category21?.thumbnail}
                objectFit="cover"
                layout="responsive"
                width={159}
                height={146}
                alt="img"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full">
            <Image
              src="/images/placeHolder.jpeg"
              layout="responsive"
              width={295}
              height={146}
              objectFit="cover"
              alt="placeholder"
            />
          </div>
        ))}
      {categoryNum === 'feature_post_category22' &&
        (data?.results?.[0]?.content?.feature_post_category22 ? (
          <Link
            href={`/blog/${data?.results?.[0]?.content?.feature_post_category22?.title}`}
            className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
          >
            <h5 className="col-span-5 text-sm font-semibold text-center xl:text-lg">
              {data?.results?.[0]?.content?.feature_post_category22?.title}
            </h5>
            <div className="relative col-span-6">
              <Image
                src={data?.results?.[0]?.content?.feature_post_category22?.thumbnail}
                objectFit="cover"
                layout="responsive"
                width={159}
                height={146}
                alt="img"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full">
            <Image
              src="/images/placeHolder.jpeg"
              layout="responsive"
              width={295}
              height={146}
              objectFit="cover"
              alt="placeholder"
            />
          </div>
        ))}
      {categoryNum === 'feature_post_category23' &&
        (data?.results?.[0]?.content?.feature_post_category23 ? (
          <Link
            href={`/blog/${data?.results?.[0]?.content?.feature_post_category23?.title}`}
            className=" border grid grid-cols-11 w-full items-center border-[#392FA3]"
          >
            <h5 className="col-span-5 text-sm font-semibold text-center xl:text-lg">
              {data?.results?.[0]?.content?.feature_post_category23?.title}
            </h5>
            <div className="relative col-span-6 w-full">
              <Image
                src={data?.results?.[0]?.content?.feature_post_category23?.thumbnail}
                objectFit="cover"
                layout="responsive"
                width={159}
                height={146}
                alt="img"
              />
            </div>
          </Link>
        ) : (
          <div className="relative w-full ">
            <Image
              src="/images/placeHolder.jpeg"
              layout="responsive"
              width={295}
              height={146}
              objectFit="cover"
              alt="placeholder"
            />
          </div>
        ))}
    </>
  );
};

export default ThumnileCategoryCart;
