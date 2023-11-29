import DisplayCategory from '@/components/core/cart/DisplayCategory';
import { useGetLandingPageCategory } from '@/hooks/querey/pageContent.tsq';
import React from 'react';

const CategorySection = () => {
  const { data } = useGetLandingPageCategory();
  return (
    <div className="grid grid-cols-2 py-7 gap-5 md:grid-cols-3 md:py-8 xl:gap-7">
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 5)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 6)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 7)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 8)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 9)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 10)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 11)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 12)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 13)} />
    </div>
  );
};

export default CategorySection;

export const BottomCategorySection = () => {
  const { data } = useGetLandingPageCategory();
  return (
    <div className="grid grid-cols-2 pt-7 gap-5 md:grid-cols-3 md:pt-8 xl:gap-7">
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 14)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 15)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 16)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 17)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 18)} />
      <DisplayCategory data={data?.find((i: any) => i.sl * 1 == 19)} />
    </div>
  );
};
