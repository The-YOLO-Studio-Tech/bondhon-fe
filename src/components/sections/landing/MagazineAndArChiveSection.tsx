'use client';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useGetFilteredArchiveData } from '@/hooks/querey/useArchiveData';
import Image from 'next/legacy/image';
import getPreviousYearsInBangla from '@/libs/getPreviousYearsInBangla';

SwiperCore.use([Navigation]);

const MagazineAndArChiveSection = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  // const { data: pageContentData } = useGetPageContent('home');
  const { data } = useGetFilteredArchiveData(month, year);

  const banglaMonths = [
    'জানুয়ারি',
    'ফেব্রুয়ারি',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগস্ট',
    'সেপ্টেম্বর',
    'অক্টোবর',
    'নভেম্বর',
    'ডিসেম্বর',
  ];

  return (
    <div className="md:grid py-7 border-t-2 border-b-2 border-black mt-7 gap-5 xl:gap-7 md:mt-9 md:py-12 md:grid-cols-3">
      <div className="h-full md:col-span-2 ">
        <h2 className="text-xl font-semibold text-[#392FA3] flex items-center mb-5 xl:mb-7 xl:text-[28px]">
          বন্ধন <span className="py-1 px-3 ml-2 rounded-full bg-red-500 text-white">ই</span>
          ম্যাগাজিন চলতি সংখ্যা
        </h2>
        <div className="h-60 z-20 overflow-hidden md:h-full">
          <div
            style={{
              backgroundColor: 'white',
              position: 'relative',
              paddingTop: 'max(20%,100px)',
              width: '100%',
              height: '94%',
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
              src={data?.[0]?.url}
              // seamless="seamless"
              scrolling="no"
              frameBorder={0}
              // allowTransparency={true}
              // allowFullScreen={true}
            />
          </div>
        </div>
      </div>
      <div className="h-full md:col-span-1">
        <h2 className="text-xl font-semibold text-[#392FA3] mb-5 md:text-center xl:mb-7 xl:text-[28px]">
          আর্কাইভ
        </h2>
        <div className="w-full ">
          <div className="h-full">
            <div className="bg-[#4852AE] py-3 px-5 flex w-full justify-between text-white text-sm font-semibold xl:text-lg">
              {' '}
              <select
                onChange={(e) => setYear(e.target.value)}
                value={year}
                className="bg-inherit outline-none"
              >
                {getPreviousYearsInBangla(10).map((i: string) => {
                  return (
                    <option key={Math.random()} value={i}>
                      {i}
                    </option>
                  );
                })}
              </select>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="bg-inherit w-fit outline-none max-w-[100px]"
              >
                {banglaMonths.map((i: any) => {
                  return (
                    <option key={Math.random()} value={i}>
                      {i}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="bg-[#F2F2F2] p-5">
              <div>
                <Swiper
                  speed={1500}
                  navigation={{
                    prevEl: '.button-prev',
                    nextEl: '.button-next',
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
                  modules={[]}
                  className="mySwiper555"
                >
                  {data?.length > 0 ? (
                    data?.map((i: any) => (
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
                    ))
                  ) : (
                    <p className="text-lg font-semibold py-4">No megazine available</p>
                  )}
                </Swiper>
              </div>
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

          <div className="md:h-2/5 md:mt-auto grid grid-cols-2 gap-5 mt-4 xl:gap-7">
            {/* {pageContentData.results?.[0]?.content?.feature_post_category3 ? (
              <Link
                href={`/blog/${pageContentData?.results?.[0]?.content?.feature_post_category3?.title}`}
                className="text-sm border p-5 text-center flex items-center justify-center h-full min-h-[73px] border-[#392FA3] md:p-0 md:py-2 xl:text-lg"
              >
                <p>{pageContentData.results?.[0]?.content?.feature_post_category3?.title}</p>
              </Link>
            ) : (
              <div className="relative w-full h-[73px]">
                <Image
                  src="/images/placeHolder.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="placeholder"
                />
              </div>
            )} */}
            {/* -------- */}
            {/* {pageContentData.results?.[0]?.content?.feature_post_category16 ? (
              <Link
                href={`/blog/${pageContentData?.results?.[0]?.content?.feature_post_category16?.title}`}
                className="text-sm border p-5 text-center flex items-center justify-center h-full min-h-[73px] border-[#392FA3] md:p-0 md:py-2 xl:text-lg"
              >
                <p>{pageContentData.results?.[0]?.content?.feature_post_category16?.title}</p>
              </Link>
            ) : (
              <div className="relative w-full h-[73px]">
                <Image
                  src="/images/placeHolder.jpeg"
                  layout="fill"
                  objectFit="cover"
                  alt="placeholder"
                />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineAndArChiveSection;
