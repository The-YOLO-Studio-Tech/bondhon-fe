import { getImgToB64 } from '@/libs/getImgToB64';
import Image from 'next/legacy/image';
import React, { useState } from 'react';

const ImageUpload = ({ setValue, error, value }: { setValue: any; error: any; value: any }) => {
  const [prevImg, setPrevImg] = useState<string>();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files && e.target.files[0]) {
        const selectedFile = e.target.files[0];
        setValue(selectedFile);
        const _ = await getImgToB64(selectedFile);
        setValue(_);
        setPrevImg(_);
      }
    } catch (error) {}
  };

  return (
    <div className="bg-[#F1FAFF] border border-dashed border-bbc-primary-2 rounded-[20px] text-center">
      <label htmlFor="dropzone-file" className="flex flex-col space-y-4 justify-center py-10">
        <div>
          {value && !prevImg && (
            <Image
              src={value ? value : '/images/imgUpIcon.png'}
              width={120}
              height={120}
              alt="icon"
            />
          )}
          {prevImg && <Image src={prevImg} width={120} height={84} alt="icon" />}
          {!value && !prevImg && (
            <Image src={'/images/imgUpIcon.png'} width={120} height={84} alt="icon" />
          )}
        </div>

        <p>Drag and drop award image to upload</p>
        <p>or</p>
        <div className="py-4 px-8 rounded-[200px] w-fit mx-auto text-bbc-dash-btn-md bg-[#3B82F6] text-white">
          Browse
        </div>

        <input
          onChange={handleFileChange}
          name="file"
          id="dropzone-file"
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>

      <p className="text-red-400">{error}</p>
    </div>
  );
};

export default ImageUpload;
