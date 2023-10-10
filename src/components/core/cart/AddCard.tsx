import Image from 'next/legacy/image';
import React from 'react';

const AddCard = ({
  width,
  height,
  image = '/images/placeHolder.jpeg',
}: {
  width: any;
  height: any;
  image?: string;
}) => {
  return (
    <div className="relative">
      <Image
        src={image}
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        alt="thumbnail"
      />
    </div>
  );
};

export default AddCard;
