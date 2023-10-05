import CategoryCart from '@/components/core/cart/CategoryCart';
import React from 'react';

const CategorySection = () => {
  return (
    <div className="grid grid-cols-2 py-8 gap-5 md:grid-cols-3 md:py-10 xl:py-[60px] xl:gap-7">
      {[...new Array(9)].map(() => (
        <CategoryCart key={Math.random()} />
      ))}
    </div>
  );
};

export default CategorySection;
