import AddCard from '@/components/core/cart/AddCard';
import CalculatorCart from '@/components/core/cart/CalculatorCart';
import CategoryCart from '@/components/core/cart/CategoryCart';
import React from 'react';

const LandingRightSideSection = () => {
  return (
    <div>
      <div className="mb-5 xl:mb-7">
        <CategoryCart />
      </div>
      <AddCard width={295} height={333} />
      <div className="my-7 xl:my-10">
        <AddCard width={295} height={609} />
      </div>
      <div>
        <CalculatorCart />
      </div>
    </div>
  );
};

export default LandingRightSideSection;
