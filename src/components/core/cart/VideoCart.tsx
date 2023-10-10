import { useGetVideoData } from '@/hooks/querey/useVideoData';
import React from 'react';

const VideoCart = () => {
  const { data } = useGetVideoData();
  return (
    <div>
      {data && (
        <div className="relative w-full  h-48 xl:h-64">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${new URL(data?.results?.[0]?.url).searchParams.get(
              'v',
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <button className="py-2 bg-[#392FA3] text-white leading-[140%] w-full text-center xl:py-5">
        {'title'}
      </button>
    </div>
  );
};

export default VideoCart;
