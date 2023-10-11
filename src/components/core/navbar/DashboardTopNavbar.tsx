'use client';
import { signOut } from 'next-auth/react';
import Image from 'next/legacy/image';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

export const SignOut = () => {
  return (
    <div className="flex justify-between mt-auto items-center mb-4 lg:mb-0 lg:mt-0 lg:pt-0">
      <div className="flex gap-2 items-center">
        <span className="w-12 h-12 rounded-full bg-slate-200"></span>
        <div>
          <h4 className="text-lg font-bold w-32">Bondhon</h4>
          <p className="text-sm mt-1 text-[#808080]">Admin</p>
        </div>
      </div>
      <div>
        <FiLogOut onClick={() => signOut()} className="font-bold cursor-pointer" size={20} />
      </div>
    </div>
  );
};

const DashboardTopNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 pt-7 lg:px-5 lg:pl-3">
          <div className="flex items-center ">
            <div className="flex items-center justify-start w-64">
              {/* <MobileDashboardDrawer /> */}
              <div className="flex ml-2 md:mr-24">
                {/* <Logo /> */}{' '}
                <Image src="/images/Bandhan-Logo.png" width={86} height={43} alt="logo" />
              </div>
            </div>
            <div className="flex items-center w-full justify-between pl-16 px-4">
              <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                  <span className="p-2 cursor-pointer bg-[#E8F3F9] hover:bg-[#0094F1] text-[#392FA3] rounded-md border-[#4D4D4D] transition-all hover:text-white">
                    <HiArrowNarrowLeft size={20} />
                  </span>

                  <span className="p-2 cursor-pointer bg-[#E8F3F9] hover:bg-[#0094F1] text-[#392FA3] rounded-md border-[#4D4D4D] transition-all hover:text-white">
                    <HiArrowNarrowRight size={20} />
                  </span>
                </div>
                <h2 className="text-2xl font-bold lg:text-4xl">Dashboard</h2>
              </div>
              <SignOut />

              {/* <div>
                    <ThemeSwitch />
                  </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardTopNavbar;
