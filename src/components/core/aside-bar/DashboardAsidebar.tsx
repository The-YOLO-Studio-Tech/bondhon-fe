'use client';
import { AddCategoryModal } from '@/components/dashboard/blog/CategoryManagement';
import { AddNewSubcategory } from '@/components/dashboard/blog/SubcategoryManagement';
import { CategoryType, useGetCategoryData } from '@/hooks/querey/category.tsq';
import Link from 'next/link';
import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const BlogItems = () => {
  const { data } = useGetCategoryData();
  // console.log(data);
  return (
    <ul className="ml-4">
      <li>
        <AddCategoryModal />
      </li>
      {data &&
        data.results.map((category: CategoryType) => (
          <li key={category.id}>
            <div>
              <Link href={`/dashboard/blog/?c_id=${category.id}&category__title=${category.title}`}>
                {category.title}
              </Link>
              <p>
                <AiOutlineDown />
              </p>
              <p>del icon</p>
              <p>edit icon</p>
            </div>

            <ul className="ml-4">
              <li>
                <AddNewSubcategory category_id={category.id} />
              </li>
              {category.sub_category?.map((sub_category) => (
                <li key={sub_category.id}>
                  <Link
                    href={`/dashboard/blog/?c_id=${category.id}&category__title=${category.title}&sc_id=${sub_category.id}&sub_category__title=${sub_category.title}`}
                  >
                    {sub_category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
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
                  <Link href={'/dashboard/settings/home'}>হোম</Link>
                </li>
                <li>
                  <Link href={'/dashboard/settings/blog-details'}>ব্লগ ডিটেইলস</Link>
                </li>
                <li>
                  <Link href={'/dashboard/settings/category'}>ক্যাটাগরি</Link>
                </li>
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
