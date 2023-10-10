import Image from 'next/legacy/image';
import React from 'react';

export const DashFeaturedCard = ({
  image = '/images/uploadImages/featuredCategory.png',
}: {
  image?: string;
}) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
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

export const DashSideCategoryCard = ({ image = '/images/uploadImages/featuredCategory.png' }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
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
export const DashCategoryCard = ({ image = '/images/uploadImages/addMainCategory.png' }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
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

export const DashLargeAddCard = ({ image = '/images/uploadImages/largeAdd.png' }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
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

export const DashVerticalAddCard = ({
  width,
  height,
  image = '/images/uploadImages/verticalAdd.png',
}: {
  width: any;
  height: any;
  image?: any;
}) => {
  return (
    <div>
      <div className="relative">
        <Image src={image} layout="responsive" width={width} height={height} alt="placeholder" />
      </div>
    </div>
  );
};

export const DashRegularAddCard = ({ image = '/images/uploadImages/verticalAdd.png' }) => {
  return (
    <div>
      <div className="relative">
        <Image src={image} layout="responsive" width={273} height={306} alt="placeholder" />
      </div>
    </div>
  );
};
