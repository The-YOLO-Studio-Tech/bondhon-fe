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
              Add Category
              <ul className="ml-4">
                <li>Cat1</li>
                <li>Cat1</li>
              </ul>
            </li>
            <li>
              Page Settings
              <ul className="ml-4">
                <li>Home</li>
                <li>Post Details</li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardAsidebar;
