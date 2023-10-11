'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';
import { BiChevronDown, BiHomeAlt2, BiSearch } from 'react-icons/bi';
import { AiOutlineLine } from 'react-icons/ai';
import MobileHamburgerMenu from './MobileHamburgerMenu';
import { useBlogCategoryData } from '@/hooks/querey/useCategorySubcategoryData';

const TopHeader = () => {
  return (
    <div className=" mt-4 md:mt-6 xl:mt-8">
      <div className="flex commonContainer justify-between items-center w-full">
        <div className="md:hidden">
          <MobileHamburgerMenu />
        </div>
        <div className="relative hidden md:inline-block md:w-[200px] md:h-[57px] xl:w-[295px] xl:h-[84px]">
          <Image src="https://placehold.co/295x84.png" layout="fill" priority alt="add" />
        </div>
        <Link href="/" className="relative w-20 h-10 md:w-24 md:h-12 xl:w-36 xl:h-[72px]">
          <Image src="/images/Bandhan-Logo.png" layout="fill" priority alt="Bandhan Logo" />
        </Link>
        <div className="flex items-center gap-3 xl:gap-5">
          <Image
            src="/images/icons/youtube.png"
            width={32}
            height={32}
            priority
            alt="youtube-icon"
          />
          <Image src="/images/icons/fb.png" width={32} height={32} priority alt="facebook-icon" />
          <Image src="/images/icons/email.png" width={32} height={32} priority alt="email-icon" />
        </div>
      </div>
    </div>
  );
};

const MenuWithSubmenu = ({
  idx,
  instance,
  count,
}: {
  idx: number;
  instance: any;
  count: number;
}) => {
  return (
    <div className="relative menu z-10">
      <li className="flex gap-1 items-center">
        <span className="flex items-center">
          {instance?.title} <BiChevronDown />
        </span>
        <span className={`rotate-90 ${idx + 1 == count ? 'hidden' : 'block'}`}>
          <AiOutlineLine size={12} />
        </span>
      </li>
      <div className=" absolute top-[-1000px] subMenu">
        <ul className="bg-white flex flex-col gap-2 text-[#392FA3] px-5 pb-3 mt-10 shadow-sm">
          {instance.sub_category?.map((i: { title: string }) => (
            <Link key={Math.random()} href={`/blog/${instance.title}/${i.title}`}>
              {i.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SearchField = () => {
  return (
    <div className="bg-white text-black p-1 flex items-center">
      <BiSearch />{' '}
      <input type="text" className="outline-none px-2 md:max-w-[87px] xl:max-w-[130px] " />
    </div>
  );
};

// default component
const DefaultNavbar = () => {
  const { data, isLoading } = useBlogCategoryData();

  return (
    <div>
      <TopHeader />
      <div className="commonContainer">
        <div className="mt-5 hidden justify-between bg-[#392FA3] items-center px-4 py-2 text-white md:flex md:py-3 md:px-7 xl:py-5 xl:px-10">
          <div className="flex gap-4 xl:gap-6">
            <Link href="/" className="flex items-center gap-1">
              <span className="flex items-center gap-1">
                <BiHomeAlt2 />
                হোম
              </span>
              <span className="rotate-90">
                <AiOutlineLine size={12} />
              </span>
            </Link>
            {isLoading
              ? [...new Array(4)].map(() => (
                  <p key={Math.random()} className="px-4 py-1 rounded-md bg-white"></p>
                ))
              : data?.results?.map((i: any, idx: number) => {
                  return (
                    <div key={Math.random()}>
                      {i.sub_category.length === 0 ? (
                        <Link href={`/blog/${i.title}`} className="flex items-center gap-1">
                          {i.title}
                          <span className="rotate-90">
                            <AiOutlineLine size={12} />
                          </span>
                        </Link>
                      ) : (
                        <MenuWithSubmenu
                          instance={i}
                          count={data?.results.length}
                          idx={idx}
                          key={Math.random()}
                        />
                      )}
                    </div>
                  );
                })}

            {/* {[...new Array(4)].map((_i, idx) => (
              
            ))} */}
          </div>
          <div>
            <SearchField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultNavbar;
