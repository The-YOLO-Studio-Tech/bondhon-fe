import Image from 'next/legacy/image';
import React from 'react';

export const DashFeaturedCard = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/uploadImages/featuredCategory.png"
          layout="responsive"
          objectFit="cover"
          width={576}
          height={625}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export const DashSideCategoryCard = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/uploadImages/featuredCategory.png"
          layout="responsive"
          objectFit="cover"
          width={273}
          height={135}
          alt="placeholder"
        />
      </div>
    </div>
  );
};
export const DashCategoryCard = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/uploadImages/addMainCategory.png"
          layout="responsive"
          objectFit="cover"
          width={273}
          height={289}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export const DashLargeAddCard = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/uploadImages/largeAdd.png"
          layout="responsive"
          objectFit="cover"
          width={875}
          height={238}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export const DashVerticalAddCard = ({ width, height }: { width: any; height: any }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/uploadImages/verticalAdd.png"
          layout="responsive"
          width={width}
          height={height}
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export const DashRegularAddCard = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/uploadImages/verticalAdd.png"
          layout="responsive"
          width={273}
          height={306}
          alt="placeholder"
        />
      </div>
    </div>
  );
};
