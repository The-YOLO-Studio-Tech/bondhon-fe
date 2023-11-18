import { useGetPageContent } from '@/hooks/querey/pageContent.tsq';
import Link from 'next/link';
import LoadingCard from './LoadingCard';

export const VideoCart = ({ data }: { data: any }) => {
  // const { data } = useGetVideoData();
  return (
    <div>
      <div className="relative w-full  h-48 xl:h-[250px]">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${new URL(data?.url).searchParams.get('v')}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <button className="py-2 bg-[#392FA3] text-white leading-[140%] w-full text-center font-medium xl:text-xl xl:py-3">
        {data?.title}
      </button>
    </div>
  );
};

export const VideoCategoryCart = () => {
  const { data } = useGetPageContent('home');
  // data?.results?.[0]?.content?.feature_video
  return (
    <>
      {data?.results?.[0]?.content?.feature_video ? (
        <Link href="/video-gallery">
          <div>
            <div className="relative w-full videoCatCard ">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${new URL(
                  data?.results?.[0]?.content?.feature_video?.url,
                ).searchParams.get('v')}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <button className="py-2 bg-[#392FA3] text-white leading-[140%] font-medium w-full text-center xl:text-xl xl:py-3">
              {`ভিডিও গ্যালারি`}
            </button>
          </div>
        </Link>
      ) : (
        <LoadingCard width={295} height={312} />
      )}
    </>
  );
};
