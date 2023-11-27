'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashAddCard, DashBlogAddCard } from './Cards';
import Image from 'next/legacy/image';

import { enqueueSnackbar } from 'notistack';
import { useGetAdvertisementData } from '@/hooks/querey/useAdvertisementData';
import { AddType } from '@/models/HomePageCoontentType';
import { useUploadBlogAdd } from '@/hooks/querey/pageContent.tsq';

const MiniCard = ({ add, setOpen, addNum }: { add: any; setOpen: any; addNum: string }) => {
  const { mutateAsync } = useUploadBlogAdd();

  const handleClick = useCallback(async () => {
    try {
      const body = { sl: Number(addNum), advertisementId: add?.id };
      await mutateAsync(body);
      setOpen(false);
      enqueueSnackbar('Saved', { variant: 'success' });
    } catch (err: any) {
      enqueueSnackbar('Unexpected error please try again later', { variant: 'error' });
    }
  }, [setOpen, addNum, mutateAsync, add]);
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image className="rounded-lg" src={add.base64} width={150} height={150} alt="thumbnail" />
    </div>
  );
};

const BlogAddPost = ({ addNum }: { addNum: string }) => {
  const [open, setOpen] = useState(false);
  const { data: adds } = useGetAdvertisementData();
  // const { data } = useGetPageContent('blog');
  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <DashBlogAddCard addNum={addNum} width={295} height={488} />
        {/* {addNum == 'blog_add1' &&
          (data?.results?.[1]?.content?.blog_add1 ? (
            <DashBlogAddCard
              width={295}
              height={488}
              image={data?.results?.[1]?.content?.blog_add1?.add_banner}
            />
          ) : (
            <DashBlogAddCard width={295} height={488} />
          ))} */}
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>অ্যাড সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="flex flex-wrap gap-4">
            {adds &&
              adds.map((add: AddType) => (
                <MiniCard key={add.id} add={add} setOpen={(x: any) => setOpen(x)} addNum={addNum} />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogAddPost;
