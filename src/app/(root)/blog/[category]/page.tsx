'use client';
import AddCard from '@/components/core/cart/AddCard';
import LoadingCard from '@/components/core/cart/LoadingCard';
import AllBlogsSection from '@/components/sections/blogs/AllBlogsSection';
import { useGetPageContent } from '@/hooks/querey/pageContent.tsq';

type Paramas = { params: { category: string } };

const BlogCategory = ({ params }: Paramas) => {
  const { data: addData } = useGetPageContent('blog');
  return (
    <div className="mt-6 commonContainer xl:mt-8">
      <div className="text-center">
        <h2 className="text-[#392FA3] text-2xl font-bold xl:text-[42px]">
          {decodeURIComponent(params.category)}
        </h2>
        {/* <p className="text-[#392FA3] mt-4 mb-10 md:mb-12 xl:mb-16 xl:mt-5 xl:text-lg">
          <Link href={'/'}>হোম</Link> - {decodeURIComponent(params.category)}
        </p> */}
      </div>
      <div className="mt-6 xl:mt-8 md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="md:col-span-9">
          <AllBlogsSection c_title={params.category} addData={addData} />
        </div>
        <div className="hidden md:block md:col-span-3">
          <div className="mb-5 md:mb-8 xl:mb-14">
            {addData?.results?.[1]?.content?.blog_add1 ? (
              <AddCard
                image={addData?.results?.[1]?.content?.blog_add1?.add_banner}
                width={295}
                height={488}
              />
            ) : (
              <LoadingCard width={295} height={488} />
            )}
          </div>
          <div className="mb-5 md:mb-8 xl:mb-14">
            {addData?.results?.[1]?.content?.blog_add2 ? (
              <AddCard
                image={addData?.results?.[1]?.content?.blog_add2?.add_banner}
                width={295}
                height={668}
              />
            ) : (
              <LoadingCard width={295} height={668} />
            )}
          </div>
          <div className="mb-5 md:mb-8 xl:mb-14">
            {addData?.results?.[1]?.content?.blog_add3 ? (
              <AddCard
                image={addData?.results?.[1]?.content?.blog_add3?.add_banner}
                width={295}
                height={302}
              />
            ) : (
              <LoadingCard width={295} height={302} />
            )}
          </div>
          <div className="mb-5 md:mb-8 xl:mb-14">
            {addData?.results?.[1]?.content?.blog_add4 ? (
              <AddCard
                image={addData?.results?.[1]?.content?.blog_add4?.add_banner}
                width={295}
                height={426}
              />
            ) : (
              <LoadingCard width={295} height={426} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
// http://127.0.0.1:8000/media/content/CommercialAd/add_banner/Rectangle_34624071.webp
