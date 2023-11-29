'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashFeaturedCard } from './Cards';
import { BlogType, useGetBlogData } from '@/hooks/querey/blog.tsq';
import Image from 'next/legacy/image';
import { enqueueSnackbar } from 'notistack';
import { useGetLandingBlog, useLandingBlog } from '@/hooks/querey/pageContent.tsq';

const MiniCard = ({ blog, setOpen, sl }: { blog: any; setOpen: any; sl: any }) => {
  const { mutateAsync } = useLandingBlog();
  const handleClick = useCallback(async () => {
    try {
      const data = {
        sl: sl,
        blogId: blog.id,
      };

      await mutateAsync(data);
      setOpen(false);
      enqueueSnackbar('Saved', { variant: 'success' });
    } catch (err: any) {}
  }, [blog, sl, mutateAsync, setOpen]);
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image
        className="rounded-lg"
        src={blog.thumbnail_b64}
        width={150}
        height={150}
        alt="thumbnail"
      />
      <p className="truncate">{blog.title}</p>
    </div>
  );
};

const TopFeaturePost = () => {
  const [open, setOpen] = useState(false);
  const { data: blog } = useGetBlogData();
  const { data } = useGetLandingBlog();

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <DashFeaturedCard image={data?.find((i: any) => i.sl == Number(1))?.blog?.thumbnail_b64} />
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>পোস্ট সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-6 gap-4">
            {blog &&
              blog.map((blog: BlogType) => (
                <MiniCard sl={1} key={blog.id} blog={blog} setOpen={(x: any) => setOpen(x)} />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TopFeaturePost;
