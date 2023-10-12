'use client';
import LoadingCard from '@/components/core/cart/LoadingCard';
import { VideoCart } from '@/components/core/cart/VideoCart';
import { useGetVideoData } from '@/hooks/querey/useVideoData';
import Link from 'next/link';
import React from 'react';

const VideoGallery = () => {
  const { data, isLoading } = useGetVideoData();
  return (
    <div className="mt-6 commonContainer xl:mt-8">
      <div className="text-center">
        <h2 className="text-[#392FA3] text-2xl font-bold xl:text-[42px]">ভিডিও গ্যালারি</h2>
        <p className="text-[#392FA3] mt-4 mb-10 md:mb-12 xl:mb-16 xl:mt-5 xl:text-lg">
          <Link href={'/'}>হোম</Link> - ভিডিও গ্যালারি
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {isLoading ? (
          <LoadingCard width={295} height={312} />
        ) : (
          data?.results.map((i: any) => <VideoCart key={Math.random()} data={i} />)
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
