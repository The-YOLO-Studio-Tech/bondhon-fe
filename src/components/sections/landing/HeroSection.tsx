import FeatureCart from '@/components/core/cart/FeatureCart';
import ThumnileCategoryCart from '@/components/core/cart/ThumnileCategoryCart';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="grid pt-8 md:pt-12 md:grid-cols-3 md:gap-5 xl:gap-7">
      <div className="col-span-2">
        <FeatureCart />
      </div>
      {/* loop 4x */}
      <div className="col-span-1 grid mt-7 grid-cols-2 gap-5 md:mt-0 md:grid-rows-4 md:grid-cols-1 xl:gap-7">
        {[...new Array(4)].map(() => (
          <ThumnileCategoryCart key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
