import FeatureCart from '@/components/core/cart/FeatureCart';
import ThumnileCategoryCart from '@/components/core/cart/ThumnileCategoryCart';
import React from 'react';

const HeroSection = () => {
  return (
    <div>
      <FeatureCart />
      {/* loop 4x */}
      <ThumnileCategoryCart />
    </div>
  );
};

export default HeroSection;
