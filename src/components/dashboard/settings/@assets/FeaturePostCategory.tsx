'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashSideCategoryCard } from './Cards';
import Image from 'next/legacy/image';
import { enqueueSnackbar } from 'notistack';
import { CategoryType, useGetCategoryData } from '@/hooks/querey/category.tsq';
import {
  useGetLandingPageCategory,
  useUploadLandingPageCategory,
} from '@/hooks/querey/pageContent.tsq';

const MiniCard = ({ category, setOpen, sl }: { category: any; setOpen: any; sl: string }) => {
  const { mutateAsync } = useUploadLandingPageCategory();
  const handleClick = useCallback(async () => {
    try {
      const body = {
        sl: Number(sl),
        blogCategoryId: Number(category.id),
      };

      await mutateAsync(body);
      setOpen(false);
      enqueueSnackbar('Saved', { variant: 'success' });
    } catch (err: any) {}
  }, [category, setOpen, sl, mutateAsync]);
  return (
    <>
      {category && (
        <div className="cursor-pointer" onClick={handleClick}>
          <Image
            className="rounded-lg"
            src={category?.thumbnail_b64}
            width={150}
            height={150}
            alt="thumbnail"
          />
          <p>{category?.title}</p>
        </div>
      )}
    </>
  );
};

const FeaturePostCategory = ({ sl }: { sl: string }) => {
  const [open, setOpen] = useState(false);
  const { data: category } = useGetCategoryData();
  const { data } = useGetLandingPageCategory();

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <DashSideCategoryCard image={data?.find((i: any) => i.sl == sl)?.category?.thumbnail_b64} />
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>ক্যাটেগরি সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="flex flex-wrap gap-4">
            {category?.length > 0 &&
              category?.map((category: CategoryType) => (
                <MiniCard
                  key={Math.random()}
                  category={category}
                  setOpen={(x: any) => setOpen(x)}
                  sl={sl}
                />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeaturePostCategory;
