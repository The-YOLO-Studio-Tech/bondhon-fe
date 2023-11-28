'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashBlogAddCard } from './Cards';
import Image from 'next/legacy/image';

import { enqueueSnackbar } from 'notistack';
import { useGetAdvertisementData } from '@/hooks/querey/useAdvertisementData';
import { AddType } from '@/models/HomePageCoontentType';
import { useGetSingleBlogAdd, useUploadBlogDetailsAdd } from '@/hooks/querey/pageContent.tsq';

const MiniCard = ({ add, setOpen, addNum }: { add: any; setOpen: any; addNum: string }) => {
  const { mutateAsync } = useUploadBlogDetailsAdd();

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

const BlogDetailsAddPost = ({ addNum }: { addNum: string }) => {
  const [open, setOpen] = useState(false);
  const { data: adds } = useGetAdvertisementData();
  const { data } = useGetSingleBlogAdd();

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <DashBlogAddCard
          image={data?.find((i: any) => i.id == Number(addNum))?.advertisement?.base64}
          addNum={addNum}
          width={295}
          height={488}
        />
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

export default BlogDetailsAddPost;
