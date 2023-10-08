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
                <li>হোম</li>
                <li>ব্লগ ডিটেইলস</li>
              </ul>
            </li>
            <li>ভিডিও</li>
            <li>বিজ্ঞাপন</li>
            <li>
              ব্লগ
              <ul className="ml-4">
                <li>অ্যাড ক্যাটাগরি</li>
                <li>
                  ক্যাটাগরি ১
                  <ul className="ml-4">
                    অ্যাড সাব-ক্যাটাগরি
                    <li>সাব-ক্যাটাগরি ১</li>
                  </ul>
                </li>
                <li> ক্যাটাগরি ২</li>
              </ul>
            </li>
            <li>আর্কাইভ</li>
            <li>বাজারদর</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardAsidebar;
