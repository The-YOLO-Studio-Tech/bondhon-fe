import DisplayCategory from '@/components/core/cart/DisplayCategory';
import React from 'react';

const CategorySection = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-2 py-7 gap-5 md:grid-cols-3 md:py-8 xl:gap-7">
      <DisplayCategory categoryNum="feature_post_category5" data={data} />
      <DisplayCategory categoryNum="feature_post_category6" data={data} />
      <DisplayCategory categoryNum="feature_post_category7" data={data} />
      <DisplayCategory categoryNum="feature_post_category8" data={data} />
      <DisplayCategory categoryNum="feature_post_category9" data={data} />
      <DisplayCategory categoryNum="feature_post_category10" data={data} />
      <DisplayCategory categoryNum="feature_post_category11" data={data} />
      <DisplayCategory categoryNum="feature_post_category12" data={data} />
      <DisplayCategory categoryNum="feature_post_category13" data={data} />
    </div>
  );
};

export default CategorySection;

export const BottomCategorySection = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-2 pt-7 gap-5 md:grid-cols-3 md:pt-8 xl:gap-7">
      <DisplayCategory categoryNum="feature_post_category14" data={data} />
      <DisplayCategory categoryNum="feature_post_category15" data={data} />
      <DisplayCategory categoryNum="feature_post_category16" data={data} />
      <DisplayCategory categoryNum="feature_post_category17" data={data} />
      <DisplayCategory categoryNum="feature_post_category18" data={data} />
      <DisplayCategory categoryNum="feature_post_category19" data={data} />
    </div>
  );
};
