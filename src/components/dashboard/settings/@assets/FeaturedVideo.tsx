'use client';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { DashVideoCard } from './Cards';
import { useGetLandingPagevideo, useUploadLandingPagevideo } from '@/hooks/querey/pageContent.tsq';
import { enqueueSnackbar } from 'notistack';
import { VideoType, useGetVideoData } from '@/hooks/querey/useVideoData';

const MiniCard = ({ video, setOpen }: { video: VideoType; setOpen: any }) => {
  const { mutateAsync } = useUploadLandingPagevideo();

  const handleClick = useCallback(async () => {
    try {
      const data = {
        sl: 1,
        videoId: video.id,
      };

      await mutateAsync(data);
      setOpen(false);
      enqueueSnackbar('Saved', { variant: 'success' });
    } catch (err: any) {
      for (let key of err.errors) {
        enqueueSnackbar(`${key?.detail}`, { variant: 'error' });
      }
    }
  }, [video, mutateAsync, setOpen]);
  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className="relative w-full p-5 rounded-md border h-36 bg-slate-100">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${new URL(video.url).searchParams.get('v')}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className="truncate">{video.title}</p>
    </div>
  );
};

const FeaturedVideo = () => {
  const [open, setOpen] = useState(false);
  const { data: video } = useGetVideoData();
  const { data } = useGetLandingPagevideo();

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <DashVideoCard
          url={data?.find((i: any) => i.sl == 1)?.video?.url}
          title={data?.find((i: any) => i.sl == 1)?.video?.title}
        />
      </div>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>পোস্ট সিলেক্ট করুন</DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-5 gap-4">
            {video &&
              video.map((video: VideoType) => (
                <MiniCard key={video.id} video={video} setOpen={(x: any) => setOpen(x)} />
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeaturedVideo;
