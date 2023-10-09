import Link from 'next/link';
import React from 'react';

const DashboardAsidebar = () => {
  return (
    <div className="">
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              পেইজ সেটিংস
              <ul className="ml-4">
                <li>
                  <Link href={'/dashboard/settings/home'}>হোম</Link>
                </li>
                <li>
                  <Link href={'/dashboard/settings/blog-details'}>ব্লগ ডিটেইলস</Link>
                </li>
                <li>
                  <Link href={'/dashboard/settings/category'}>ক্যাটাগরি</Link>
                </li>
                <li>
                  <Link href={'/dashboard/settings/calculator'}>ক্যালকুলেটর</Link>
                </li>
                <li>
                  <Link href={'/dashboard/settings/certificate'}>সার্টিফিকেট</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={'/dashboard/video'}>ভিডিও</Link>
            </li>
            <li>
              <Link href={'/dashboard/advertisement'}>বিজ্ঞাপন</Link>
            </li>
            <li>
              ব্লগ
              <ul className="ml-4">
                <li>
                  <Link href={'/dashboard/blog/catagory/add'}>অ্যাড ক্যাটাগরি</Link>
                </li>
                <li>
                  <Link href={'/dashboard/blog/1'}>ক্যাটাগরি ১</Link>
                  <ul className="ml-4">
                    <Link href={'/dashboard/blog/1/sub-catagory/add'}>অ্যাড সাব-ক্যাটাগরি</Link>

                    <li>
                      <Link href={'/dashboard/blog/1/sub-catagory/1'}>অ্যাড সাব-ক্যাটাগরি</Link>
                      সাব-ক্যাটাগরি ১
                    </li>
                  </ul>
                </li>
                <li> ক্যাটাগরি ২</li>
              </ul>
            </li>
            <li>
              <Link href={'/archive'}>আর্কাইভ</Link>
            </li>
            {/* <li>বাজারদর</li> */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardAsidebar;
