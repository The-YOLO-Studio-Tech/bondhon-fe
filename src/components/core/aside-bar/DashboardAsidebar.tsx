'use client';
import {
  AddCategoryModal,
  DeleteCategory,
  UpdateCategoryModal,
  // DeleteCategory,
  // UpdateCategoryModal,
} from '@/components/dashboard/blog/CategoryManagement';
import { useGetCategoryData } from '@/hooks/querey/category.tsq';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

const Categories = ({ menu, open }: { menu: string; open: boolean }) => {
  const { data } = useGetCategoryData(menu);
  const searchParams = useSearchParams();

  return (
    <>
      <ul className={`ml-4 ${open ? 'inline-block' : 'hidden'}`}>
        <li className="my-1 ">
          <AddCategoryModal menu={menu} />
        </li>
        {data?.map((i: any) => (
          <ul
            className={`list-disc ml-4 ${
              searchParams.get('sub_category__title') == i.title ? 'text-[#392FA3]' : ''
            }`}
            key={i.id}
          >
            <li className="" key={i.id}>
              <div className="flex gap-2 text-sm items-center">
                <Link href={`/dashboard/blog/?menu=${menu}&c_id=${i.id}`}>{i.title}</Link>
                <span className="flex gap-1">
                  <UpdateCategoryModal instance={i} menu={menu} />
                  <DeleteCategory id={i.id} />
                </span>
              </div>
            </li>
          </ul>
        ))}
      </ul>
    </>
  );
};

// category
const MenuItem = ({ menu, idx }: { menu: any; idx: number }) => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  return (
    <li key={idx}>
      <div className="flex ">
        <Link
          onClick={() => setOpen(!open)}
          className={`flex justify-between items-center mr-8 pb-1 w-4/5 px-3 py-2 rounded-md ${
            searchParams.get('menu') == menu ? 'bg-[#392FA3] text-white' : ''
          }`}
          href={`/dashboard/blog/?menu=${menu}`}
        >
          {menu}
          {open ? <AiOutlineDown /> : <AiOutlineRight />}
        </Link>
        {/* {idx < 6 ? (
          <Link
            onClick={() => setOpen(!open)}
            className={`flex justify-between items-center mr-8 pb-1 w-4/5 px-3 py-2 rounded-md ${
              searchParams.get('category__title') == menu ? 'bg-[#392FA3] text-white' : ''
            }`}
            href={`/dashboard/blog/?category__title=${menu}`}
          >
            {menu}
            {open ? <AiOutlineDown /> : <AiOutlineRight />}
          </Link>
        ) : (
          <Link
            className={`flex justify-between items-center mr-8 pb-1 w-4/5 px-3 py-2 rounded-md ${
              searchParams.get('category__title') == category.title ? 'bg-[#392FA3] text-white' : ''
            }`}
            href={`/dashboard/blog/?c_id=${category.id}&category__title=${category.title}`}
          >
            {category.title}
          </Link>
        )} */}
        {/* <span className="w-1/5 flex gap-1 items-center">
          <UpdateCategoryModal id={category.id} instance={category} />
          <DeleteCategory id={category.id} />
        </span> */}
      </div>
      <Categories menu={menu} open={open} />
    </li>
  );
};

const BlogItems = () => {
  // const { data } = useGetCategoryData();
  return (
    <ul className="ml-4 space-y-2">
      <Link href={'/dashboard/blog'}>সকল ব্লগ</Link>
      {['স্থাপত্য', 'প্রকৌশল', 'ইন্টেরিয়র', 'পরিবেশ', 'মূল রচনা', 'অন্যান্য'].map(
        (menu: any, idx: number) => (
          <MenuItem key={Math.random()} idx={idx} menu={menu} />
        ),
      )}
    </ul>
  );
};

/** default component */
const DashboardAsidebar = () => {
  const pathName = usePathname();
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-28 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className=" font-medium">
            <li>
              <span className="font-bold">পেইজ সেটিংস</span>
              <ul className="ml-4 ">
                <li
                  className={`px-3 py-2 w-full rounded-md ${
                    pathName == '/dashboard' ? 'bg-[#392FA3] text-white' : ''
                  }`}
                >
                  <Link className="w-full" href={'/dashboard'}>
                    হোম
                  </Link>
                </li>
                <li
                  className={`px-3 py-2 rounded-md ${
                    pathName.includes('/settings/blog') ? 'bg-[#392FA3] text-white' : ''
                  }`}
                >
                  <Link href={'/dashboard/settings/blog'}>ব্লগ</Link>
                </li>
                {/* <li>
                  <Link href={'/dashboard/settings/category'}>ক্যাটাগরি</Link>
                </li> */}
                {/* <li>
                  <Link href={'/dashboard/settings/calculator'}>ক্যালকুলেটর</Link>
                </li> */}
                {/* <li>
                  <Link href={'/dashboard/settings/certificate'}>সার্টিফিকেট</Link>
                </li> */}
              </ul>
            </li>
            <li
              className={`px-3 py-2 rounded-md ${
                pathName == '/dashboard/video' ? 'bg-[#392FA3] text-white' : ''
              }`}
            >
              <Link href={'/dashboard/video'}>ভিডিও</Link>
            </li>
            <li
              className={`px-3 py-2 rounded-md ${
                pathName == '/dashboard/advertisement' ? 'bg-[#392FA3] text-white' : ''
              }`}
            >
              <Link href={'/dashboard/advertisement'}>বিজ্ঞাপন</Link>
            </li>
            <li>
              <span className="font-bold">ব্লগ</span>
              <BlogItems />
            </li>
            <li
              className={`px-3 py-2 rounded-md ${
                pathName == '/dashboard/archive' ? 'bg-[#392FA3] text-white' : ''
              }`}
            >
              <Link href={'/dashboard/archive'}>আর্কাইভ</Link>
            </li>
            {/* <li>বাজারদর</li> */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardAsidebar;
