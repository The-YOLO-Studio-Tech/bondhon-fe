'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { BiChevronDown, BiHomeAlt2, BiSearch } from 'react-icons/bi';
import { AiOutlineLine } from 'react-icons/ai';
import MobileHamburgerMenu from './MobileHamburgerMenu';

import { useGetCategoryData } from '@/hooks/querey/category.tsq';
import { useGetLandingAdd } from '@/hooks/querey/pageContent.tsq';
import AddCard from '../cart/AddCard';
import LoadingCard from '../cart/LoadingCard';

const TopHeader = () => {
  const { data: lansingAdd } = useGetLandingAdd();
  return (
    <div className="mt-4">
      <div className="grid commonContainer grid-cols-3 items-center w-full">
        <div className="md:hidden">
          <MobileHamburgerMenu />
        </div>
        <div className="relative hidden md:inline-block md:w-[200px] md:h-[57px] xl:w-[295px] xl:h-[84px]">
          <div className="">
            {lansingAdd?.find((i: any) => i.sl == 1) ? (
              <AddCard
                image={lansingAdd?.find((i: any) => i.sl == 1)?.advertisement?.base64}
                width={295}
                height={84}
              />
            ) : (
              <LoadingCard width={295} height={84} />
            )}
          </div>
        </div>
        <Link href="/" className="relative w-20 mx-auto h-10 md:w-24 md:h-12 xl:w-36 xl:h-[72px]">
          <Image src="/images/Bandhan-Logo.png" layout="fill" priority alt="Bandhan Logo" />
        </Link>
        <div className="flex items-center justify-end gap-3 xl:gap-5">
          <span>
            <Image
              src="/images/icons/youtube.png"
              width={32}
              height={32}
              priority
              alt="youtube-icon"
            />
          </span>
          <Link href="https://www.facebook.com/bandhanmagazine" target="_blank">
            <Image src="/images/icons/fb.png" width={32} height={32} priority alt="facebook-icon" />
          </Link>
          <a href="mailto: bandhanbgd@gmail.com">
            <Image src="/images/icons/email.png" width={32} height={32} priority alt="email-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Menu = ({ menu }: { menu: string }) => {
  const { data, isLoading } = useGetCategoryData(menu);
  // console.log(data);
  return (
    <div>
      {isLoading ? (
        [...new Array(4)].map(() => (
          <p key={Math.random()} className="px-4 py-1 rounded-md bg-white"></p>
        ))
      ) : (
        <>
          {data?.length === 0 ? (
            <Link href={`/blog/?menu=${menu}`} className="flex items-center gap-1 xl:text-xl">
              {menu}
              <span className="rotate-90">
                <AiOutlineLine size={12} />
              </span>
            </Link>
          ) : (
            <MenuWithSubmenu
              title={menu}
              instance={data}
              // count={data.length}
              // idx={idx}
            />
          )}
        </>
      )}
    </div>
  );
};

const MenuWithSubmenu = ({
  title,
  instance, // count,
}: {
  title: string;
  instance: any;
  // count: number;
}) => {
  return (
    <div className="relative menu z-10">
      <li className="flex gap-1 items-center">
        <span className="flex items-center xl:text-xl">
          {title} <BiChevronDown />
        </span>
        {/* <span className={`rotate-90 ${idx + 1 == count ? 'hidden' : 'block'}`}>
          <AiOutlineLine size={12} />
        </span> */}
      </li>
      <div className="absolute top-[-1000px] subMenu">
        <ul className="bg-white text-[#392FA3] px-5 space-y-2 pb-3 mt-10 shadow-sm">
          {instance?.map((i: any) => (
            <li className="min-w-[250px] inline-block hover:border-b" key={Math.random()}>
              <Link className="" key={Math.random()} href={`/blog/?menu=${title}&c_id=${i.id}`}>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SearchField = () => {
  return (
    <div className="bg-white text-black flex items-center">
      <BiSearch size={20} />{' '}
      <input
        type="text"
        placeholder="Search"
        className="outline-none px-2 md:max-w-[90px] xl:max-w-[150px] "
      />
    </div>
  );
};

// default component
const DefaultNavbar = () => {
  // const { data, isLoading } = useBlogCategoryData(6, 0);

  return (
    <div>
      <TopHeader />
      <div className="commonContainer">
        <div className="mt-5 hidden justify-between bg-[#392FA3] items-center px-4 py-2 text-white md:flex md:py-3 md:px-7 xl:px-10">
          <div className="flex gap-4 xl:gap-6">
            <Link href="/" className="flex items-center gap-1 xl:text-xl">
              <span className="flex items-center gap-1">
                <BiHomeAlt2 />
                হোম
              </span>
              <span className="rotate-90">
                <AiOutlineLine size={12} />
              </span>
            </Link>
            {['স্থাপত্য', 'প্রকৌশল', 'ইন্টেরিয়র', 'পরিবেশ', 'মূল রচনা', 'অন্যান্য'].map(
              (i: any) => {
                return (
                  <div key={Math.random()}>
                    <Menu menu={i} />
                  </div>
                );
              },
            )}
          </div>
          <div className="hidden lg:block">
            <SearchField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultNavbar;
