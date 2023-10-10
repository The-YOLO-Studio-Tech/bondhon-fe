import Image from 'next/legacy/image';
import React from 'react';

const LoadingCard = ({ width, height }: { width: any; height: any }) => {
  return (
    <div className="w-ful relative">
      <Image
        src="/images/placeHolder.jpeg"
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        alt="featureCard"
      />
    </div>
  );
};

export default LoadingCard;
