import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { useGetArchiveData } from '@/hooks/querey/useArchiveData';
import Image from 'next/legacy/image';

SwiperCore.use([Navigation]);

const MagazineAndArChiveSection = () => {
  const { data } = useGetArchiveData();
  return (
    <div className="grid py-8 border-t border-b mt-8 gap-5 xl:gap-7 md:mt-10 md:py-10 md:grid-cols-3 xl:py-[60px] xl:mt-[60px]">
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold text-[#392FA3] mb-5 xl:mb-7 xl:text-[28px]">
          বন্ধন ইম্যাগাজিন চলতি সংখ্যা
        </h2>
        <div
          style={{
            position: 'relative',
            paddingTop: 'max(60%,324px)',
            width: '100%',
            height: '100%',
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              border: 'none',
              width: '100%',
              height: '91%',
              backgroundColor: 'white',
              left: 0,
              top: 0,
            }}
            src={data?.results?.[0]?.url}
            // seamless="seamless"
            scrolling="no"
            frameBorder={0}
            // allowTransparency="true"
            // allowFullScreen="true"
          />
        </div>
      </div>
      <div className="md:col-span-1 h-full">
        <h2 className="text-xl font-semibold text-[#392FA3] mb-5 xl:mb-7 xl:text-[28px]">
          আর্কাইভ
        </h2>
        <div className="gap-5 flex flex-col xl:gap-7">
          <div className="h-full md:h-3/5">
            <div className="bg-[#4852AE] py-3 px-5 flex w-full justify-between text-white text-sm font-semibold xl:text-lg">
              {' '}
              <span>বছর</span> <span>মাস</span>
            </div>
            <div className="bg-[#F2F2F2] p-5">
              <Swiper
                speed={1500}
                navigation={{
                  prevEl: '.button-prev',
                  nextEl: '.button-next',
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  100: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1236: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {data?.results?.map((i: any) => (
                  <SwiperSlide key={Math.random()}>
                    <div>
                      <Image
                        src={i.thumbnail}
                        width={111}
                        height={150}
                        layout="responsive"
                        objectFit="cover"
                        alt="thumbnail"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center gap-3 mt-2 lg:gap-5">
                <button className="button-prev p-1 text-white bg-[#392FA3] transition-all hover:bg-[#5e52df] hover:text-tys-1 lg:p-2">
                  <AiOutlineLeft />
                </button>
                <button className="button-next p-1 text-white bg-[#392FA3] transition-all hover:bg-[#5e52df] hover:text-tys-1 lg:p-2">
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>

          <div className="md:h-2/5 grid grid-cols-2 gap-5 xl:gap-7">
            <div className="text-sm border py-1 text-center h-full border-[#392FA3] xl:text-lg">
              <p>জটিল যৌগের সরল কথা</p>
            </div>
            <div className="text-sm border py-1 text-center border-[#392FA3] xl:text-lg">
              <p>জটিল যৌগের সরল কথা</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineAndArChiveSection;
