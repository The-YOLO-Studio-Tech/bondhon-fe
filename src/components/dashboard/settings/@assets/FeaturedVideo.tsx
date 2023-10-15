'use client';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashFeaturedCard } from './Cards';
import { BlogType } from '@/hooks/querey/blog.tsq';
import Image from 'next/legacy/image';
import { useGetPageContent, useMutionPageContent } from '@/hooks/querey/pageContent.tsq';
import { enqueueSnackbar } from 'notistack';
import { useGetVideoData } from '@/hooks/querey/useVideoData';

const MiniCard = ({ blog, setOpen }: { blog: BlogType; setOpen: any }) => {
  const { mutateAsync } = useMutionPageContent();
  const handleClick = useCallback(async () => {
    try {
      const data = {
        page_name: 'home',
        content: { feature_post: blog },
      };
      await mutateAsync(data);
      setOpen(false);
      enqueueSnackbar('Saved', { variant: 'success' });
    } catch (err: any) {
      for (let key of err.errors) {
        enqueueSnackbar(`${key?.detail}`, { variant: 'error' });
      }
    }
  }, [blog, mutateAsync, setOpen]);
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image className="rounded-lg" src={blog.thumbnail} width={150} height={150} alt="thumbnail" />
      <p className="truncate">
        {blog.title} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam illum
        officia quibusdam sequi similique porro iste assumenda laudantium consequatur.
      </p>
    </div>
  );
};

const FeaturedVideo = () => {
  const [open, setOpen] = useState(false);
  const { data: blog } = useGetVideoData();
  const { data } = useGetPageContent('home');

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {data?.results?.[0]?.content?.feature_post ? (
          <DashFeaturedCard image={data?.results?.[0]?.content?.feature_post?.thumbnail} />
        ) : (
          <DashFeaturedCard />
        )}
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>পোস্ট সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-6 gap-4">
            {blog &&
              blog.results.map((blog: BlogType) => (
                <MiniCard key={blog.id} blog={blog} setOpen={(x: any) => setOpen(x)} />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeaturedVideo;
