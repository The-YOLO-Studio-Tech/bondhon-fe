'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashRegularAddCard } from './Cards';
import Image from 'next/legacy/image';
import { useGetPageContent, useMutionPageContent } from '@/hooks/querey/pageContent.tsq';
import { enqueueSnackbar } from 'notistack';
import { useGetAdvertisementData } from '@/hooks/querey/useAdvertisementData';
import { AddType } from '@/models/HomePageCoontentType';

const MiniCard = ({ add, setOpen, addNum }: { add: AddType; setOpen: any; addNum: string }) => {
  const { mutateAsync } = useMutionPageContent();
  const handleClick = useCallback(async () => {
    let data;
    try {
      if (addNum == 'blog_add1') {
        data = {
          page_name: 'blog',
          content: { blog_add1: add },
        };
      } else if (addNum == 'blog_add2') {
        data = {
          page_name: 'blog',
          content: { blog_add2: add },
        };
      } else if (addNum == 'blog_add3') {
        data = {
          page_name: 'blog',
          content: { blog_add3: add },
        };
      } else if (addNum == 'blog_add4') {
        data = {
          page_name: 'blog',
          content: { blog_add4: add },
        };
      } else if (addNum == 'blog_add5') {
        data = {
          page_name: 'blog',
          content: { blog_add5: add },
        };
      }
      await mutateAsync(data);
      setOpen(false);
      enqueueSnackbar('Saved', { variant: 'success' });
    } catch (err: any) {
      for (let key of err.errors) {
        enqueueSnackbar(`${key?.detail}`, { variant: 'error' });
      }
    }
  }, [add, mutateAsync, setOpen, addNum]);
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image className="rounded-lg" src={add.add_banner} width={150} height={150} alt="thumbnail" />
    </div>
  );
};

const BlogAddPost = ({ addNum }: { addNum: string }) => {
  const [open, setOpen] = useState(false);
  const { data: adds } = useGetAdvertisementData();
  const { data } = useGetPageContent('blog');
  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {addNum == 'blog_add1' &&
          (data?.results?.[1]?.content?.blog_add1 ? (
            <DashRegularAddCard image={data?.results?.[1]?.content?.blog_add1?.add_banner} />
          ) : (
            <DashRegularAddCard />
          ))}
        {addNum == 'blog_add2' &&
          (data?.results?.[1]?.content?.blog_add2 ? (
            <DashRegularAddCard image={data?.results?.[1]?.content?.blog_add2?.add_banner} />
          ) : (
            <DashRegularAddCard />
          ))}
        {addNum == 'blog_add3' &&
          (data?.results?.[1]?.content?.blog_add3 ? (
            <DashRegularAddCard image={data?.results?.[1]?.content?.blog_add3?.add_banner} />
          ) : (
            <DashRegularAddCard />
          ))}
        {addNum == 'blog_add4' &&
          (data?.results?.[1]?.content?.blog_add4 ? (
            <DashRegularAddCard image={data?.results?.[1]?.content?.blog_add4?.add_banner} />
          ) : (
            <DashRegularAddCard />
          ))}
        {addNum == 'blog_add5' &&
          (data?.results?.[1]?.content?.blog_add5 ? (
            <DashRegularAddCard image={data?.results?.[1]?.content?.blog_add5?.add_banner} />
          ) : (
            <DashRegularAddCard />
          ))}
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>অ্যাড সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="flex flex-wrap gap-4">
            {adds &&
              adds.results.map((add: AddType) => (
                <MiniCard key={add.id} add={add} setOpen={(x: any) => setOpen(x)} addNum={addNum} />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogAddPost;
