'use client';
import FeatureCart from '@/components/core/cart/FeatureCart';
import LoadingCard from '@/components/core/cart/LoadingCard';
import ThumnileCategoryCart from '@/components/core/cart/ThumnileCategoryCart';
import { useGetPageContent } from '@/hooks/querey/pageContent.tsq';
import React from 'react';

const HeroSection = () => {
  const { data, isLoading } = useGetPageContent('home');

  return (
    <div className="grid md:grid-cols-3 md:gap-5 xl:gap-7">
      <div className="relative md:col-span-2">
        {isLoading ? <LoadingCard width={422} height={458} /> : <FeatureCart data={data} />}
      </div>
      {/* loop 4x */}
      <div className=" grid mt-7 grid-cols-2 gap-5 md:mt-0 md:grid-rows-4 md:col-span-1 md:grid-cols-1 xl:gap-7">
        <ThumnileCategoryCart
          categoryNum="feature_post_category1"
          data={data}
          key={Math.random()}
        />
        <ThumnileCategoryCart
          categoryNum="feature_post_category2"
          data={data}
          key={Math.random()}
        />
        <ThumnileCategoryCart
          categoryNum="feature_post_category3"
          data={data}
          key={Math.random()}
        />
        <ThumnileCategoryCart
          categoryNum="feature_post_category4"
          data={data}
          key={Math.random()}
        />
      </div>
    </div>
  );
};

export default HeroSection;
