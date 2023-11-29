'use client';
import AddCard from '@/components/core/cart/AddCard';
import FeatureCart from '@/components/core/cart/FeatureCart';
import LoadingCard from '@/components/core/cart/LoadingCard';
import ThumnileCategoryCart from '@/components/core/cart/ThumnileCategoryCart';
import { useGetLandingBlog, useGetLandingPageCategory } from '@/hooks/querey/pageContent.tsq';

const HeroSection = () => {
  const { data, isLoading } = useGetLandingBlog();
  const { data: category } = useGetLandingPageCategory();

  return (
    <div className="grid md:grid-cols-3 md:gap-5 xl:gap-7">
      <div className="relative md:col-span-2">
        {isLoading ? <LoadingCard width={422} height={458} /> : <FeatureCart data={data} />}
      </div>
      <div className="relative w-[295px] mx-auto mt-5 h-[65px] md:hidden">
        <div className="">
          {data?.results?.[0]?.content?.topAdd ? (
            <AddCard
              image={data?.results?.[0]?.content?.topAdd?.add_banner}
              width={295}
              height={57}
            />
          ) : (
            <LoadingCard width={295} height={57} />
          )}
        </div>
      </div>
      {/* loop 4x */}
      <div className=" grid mt-7 grid-cols-2 gap-5 md:mt-0 md:grid-rows-4 md:col-span-1 md:grid-cols-1 xl:gap-7">
        <ThumnileCategoryCart data={category?.find((i: any) => i.sl * 1 == 1)} />
        <ThumnileCategoryCart data={category?.find((i: any) => i.sl * 1 == 2)} />
        <ThumnileCategoryCart data={category?.find((i: any) => i.sl * 1 == 3)} />
        <ThumnileCategoryCart data={category?.find((i: any) => i.sl * 1 == 4)} />
      </div>
    </div>
  );
};

export default HeroSection;
