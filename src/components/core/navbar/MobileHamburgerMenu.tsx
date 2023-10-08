'use client';
import { Accordion, AccordionDetails, AccordionSummary, Drawer, Typography } from '@mui/material';
import Image from 'next/legacy/image';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

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
          <div className="space-y-3 px-3 pt-7">
            <ul className="text-xl font-semibold">
              <li>হোম</li>
            </ul>
            {[...new Array(4)].map(() => {
              return (
                <div key={Math.random()}>
                  <Accordion
                    sx={{
                      width: '288px',
                      boxShadow: 'none',
                      borderRadius: 'none',
                      margin: '-8px 0',
                    }}
                  >
                    <AccordionSummary
                      sx={{ padding: '0px' }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        sx={{
                          fontSize: '20px',
                          fontWeight: '600',
                          margin: '0px',
                          padding: '0px',
                          // color:`${active?'#EAA41D':''}`
                        }}
                      >
                        {'স্থাপথ্য'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: '0px' }}>
                      <ul className="space-y-3 font-medium ml-10">
                        {[...new Array(3)].map((_i, idx) => (
                          <li
                            className="list-disc"
                            onClick={() => setOpen(!open)}
                            // className={`list-disc ${router.pathname == i.url?'active_nav':''}`}
                            key={idx}
                          >
                            <Link href="/">{`submenu${idx + 1}`}</Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                  {/* <p>{instance.title}</p>
      <ul className="mt-2 text-sm font-medium ml-5">
        {
          instance.submenu.map((i,idx)=> <li key={idx}><Link href={i.url}>{i.title}</Link></li>)
        }
      </ul> */}
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileHamburgerMenu;
