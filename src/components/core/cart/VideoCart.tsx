import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

export const VideoCart = ({ data }: { data: any }) => {
  // const { data } = useGetVideoData();
  return (
    <div>
      <div className="relative w-full  h-48 xl:h-[250px]">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${new URL(data?.url).searchParams.get('v')}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <button className="py-2 bg-[#392FA3] text-white leading-[140%] w-full text-center font-medium xl:text-xl xl:py-5">
        {data?.title}
      </button>
    </div>
  );
};

export const VideoCategoryCart = () => {
  return (
    <Link href="/video-gallery">
      <div>
        <div className="relative w-full">
          <Image
            src="/images/video.png"
            width={295}
            height={244}
            layout="responsive"
            objectFit="cover"
            alt="img"
          />
        </div>
        <button className="py-2 bg-[#392FA3] text-white leading-[140%] font-medium w-full text-center xl:text-xl xl:py-5">
          {`ভিডিও গ্যালারি`}
        </button>
      </div>
    </Link>
  );
};
