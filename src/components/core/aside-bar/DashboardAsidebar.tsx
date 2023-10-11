'use client';
import {
  AddCategoryModal,
  DeleteCategory,
  UpdateCategoryModal,
} from '@/components/dashboard/blog/CategoryManagement';
import {
  AddNewSubcategory,
  DeleteSubCategory,
  UpdateSubCategoryModal,
} from '@/components/dashboard/blog/SubcategoryManagement';
import { CategoryType, useGetCategoryData } from '@/hooks/querey/category.tsq';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

// category
const CategoryItem = ({ category }: { category: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <li key={category.id}>
      <div className="flex ">
        <Link
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center mr-8 pb-1 w-4/5"
          href={`/dashboard/blog/?c_id=${category.id}&category__title=${category.title}`}
        >
          {category.title}
          {open ? <AiOutlineDown /> : <AiOutlineRight />}
        </Link>
        <span className="w-1/5 flex gap-1 items-center">
          <UpdateCategoryModal id={category.id} instance={category} />
          <DeleteCategory id={category.id} />
        </span>
      </div>

      <ul className={`ml-4 ${open ? 'inline-block' : 'hidden'}`}>
        <li className="my-1 ">
          <AddNewSubcategory category_id={category.id} />
        </li>
        {category.sub_category?.map((sub_category: any) => (
          <ul className="list-disc ml-4" key={sub_category.id}>
            <li className="" key={sub_category.id}>
              <div className="flex gap-2 text-sm items-center">
                <Link
                  href={`/dashboard/blog/?c_id=${category.id}&category__title=${category.title}&sc_id=${sub_category.id}&sub_category__title=${sub_category.title}`}
                >
                  {sub_category.title}
                </Link>
                <span className="flex gap-1">
                  <UpdateSubCategoryModal
                    id={sub_category.id}
                    category_id={category.id}
                    instance={sub_category}
                  />
                  <DeleteSubCategory id={sub_category.id} />
                </span>
              </div>
            </li>
          </ul>
        ))}
      </ul>
    </li>
  );
};

const BlogItems = () => {
  const { data } = useGetCategoryData();
  return (
    <ul className="ml-4 space-y-2">
      <li>
        <AddCategoryModal />
      </li>
      {data &&
        data.results.map((category: CategoryType) => (
          <CategoryItem key={Math.random()} category={category} />
        ))}
    </ul>
  );
};

/** default component */
const DashboardAsidebar = () => {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-28 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-3 font-medium">
            <li>
              <span className="font-bold">পেইজ সেটিংস</span>
              <ul className="ml-4 space-y-2">
                <li>
                  <Link href={'/dashboard'}>হোম</Link>
                </li>
                <li>
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
            <li>
              <Link href={'/dashboard/video'}>ভিডিও</Link>
            </li>
            <li>
              <Link href={'/dashboard/advertisement'}>বিজ্ঞাপন</Link>
            </li>
            <li>
              <span className="font-bold">ব্লগ</span>
              <BlogItems />
            </li>
            <li>
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
