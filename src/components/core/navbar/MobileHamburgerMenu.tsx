'use client';
import { Drawer } from '@mui/material';
import Image from 'next/legacy/image';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const MobileHamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <GiHamburgerMenu onClick={() => setOpen(true)} size={30} className="md:hidden" />
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'white',
          },
        }}
        anchor={'left'}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <div className="w-80">
          <div className="flex justify-between items-center border-b p-2">
            <Image className="" width={84} height={42} src="/images/Bandhan-Logo.png" alt="logo" />
            <RxCross2
              size={26}
              className="cursor-pointer text-[#392FA3] text-xl font-bold"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileHamburgerMenu;
