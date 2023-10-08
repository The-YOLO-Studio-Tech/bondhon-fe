import Image from 'next/legacy/image';
import React from 'react';

const AddCard = ({ width, height }: { width: any; height: any }) => {
  return (
    <div className="relative">
      <Image
        src="https://placehold.co/600x400.png?text=Add"
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
