'use client';
import AddCard from '@/components/core/cart/AddCard';
import LoadingCard from '@/components/core/cart/LoadingCard';
import AllBlogsSection from '@/components/sections/blogs/AllBlogsSection';
import { useGetBlogAdd } from '@/hooks/querey/pageContent.tsq';
import Link from 'next/link';
import React from 'react';
// type Paramas = { params: { category: string } };

const BlogPage = () => {
  const { data: addVer } = useGetBlogAdd();

  return (
    <div className="mt-6 commonContainer xl:mt-8">
      <div className="text-center">
        <h2 className="text-[#392FA3] text-2xl font-bold w-fit px-4 mx-auto border-b border-[#392FA3] xl:text-4xl">
          {/* {decodeURIComponent(params.category)} */}
          Blog
        </h2>
        <p className="text-[#392FA3] mt-4 mb-10 md:mb-12 xl:mb-16 xl:mt-5 xl:text-lg">
          <Link href={'/'}>হোম</Link> - DDD
        </p>
      </div>
      <div className="mt-6 xl:mt-8 md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="md:col-span-9">
          <AllBlogsSection />
        </div>
        <div className="hidden md:block md:col-span-3">
          <div className="mb-5 md:mb-8 xl:mb-14">
            {/* add 1 */}
            {addVer?.find((i: any) => i.sl == 1) ? (
              <AddCard
                image={addVer?.find((i: any) => i.sl == 1)?.advertisement?.base64}
                width={295}
                height={488}
              />
            ) : (
              <LoadingCard width={295} height={488} />
            )}
          </div>
          <div className="mb-5 md:mb-8 xl:mb-14">
            {/* add 2 */}
            {addVer?.find((i: any) => i.sl == 2) ? (
              <AddCard
                image={addVer?.find((i: any) => i.sl == 2)?.advertisement?.base64}
                width={295}
                height={488}
              />
            ) : (
              <LoadingCard width={295} height={488} />
            )}
          </div>
          <div className="mb-5 md:mb-8 xl:mb-14">
            {/* add 3 */}
            {addVer?.find((i: any) => i.sl == 3) ? (
              <AddCard
                image={addVer?.find((i: any) => i.sl == 3)?.advertisement?.base64}
                width={295}
                height={488}
              />
            ) : (
              <LoadingCard width={295} height={488} />
            )}
          </div>
          <div className="mb-5 md:mb-8 xl:mb-14">
            {/* add 4 */}
            {addVer?.find((i: any) => i.sl == 4) ? (
              <AddCard
                image={addVer?.find((i: any) => i.sl == 4)?.advertisement?.base64}
                width={295}
                height={488}
              />
            ) : (
              <LoadingCard width={295} height={488} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
