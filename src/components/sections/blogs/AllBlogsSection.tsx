'use client';
import React from 'react';
import BlogCard from '../../core/cart/BlogCard';
import { BlogType, useGetBlogData } from '@/hooks/querey/blog.tsq';
import LoadingCard from '@/components/core/cart/LoadingCard';
import AddCard from '@/components/core/cart/AddCard';
import { useGetBlogAdd } from '@/hooks/querey/pageContent.tsq';

const AllBlogsSection = ({}: {}) => {
  const { data, isLoading } = useGetBlogData();
  const { data: addVer } = useGetBlogAdd();

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
        {isLoading
          ? [...new Array(4)].map(() => (
              <LoadingCard key={Math.random()} width={295} height={239} />
            ))
          : data?.slice(0, 6).map((i: BlogType) => <BlogCard key={i.id} blog={i} />)}
      </div>
      <div className="my-8 md:my-10 xl:my-[60px]">
        {/* add 5 */}
        {addVer?.find((i: any) => i.sl == 5) ? (
          <AddCard
            image={addVer?.find((i: any) => i.sl == 5)?.advertisement?.base64}
            width={945}
            height={257}
          />
        ) : (
          <LoadingCard width={945} height={257} />
        )}
      </div>

      {/* mbl add show */}
      <div className="grid grid-cols-2 px-2 gap-5 md:hidden">
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
              height={668}
            />
          ) : (
            <LoadingCard width={295} height={668} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10 md:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:mt-16 xl:gap-7">
        {isLoading
          ? [...new Array(4)].map(() => (
              <LoadingCard key={Math.random()} width={295} height={239} />
            ))
          : data?.slice(7, data.length).map((i: BlogType) => <BlogCard key={i.id} blog={i} />)}
      </div>

      {/* mbl bottomAdd section */}
      <div className="grid grid-cols-2 gap-5 px-2 mt-7 md:hidden">
        <div className="mb-5 md:mb-8 xl:mb-14">
          {/* add 3 */}
          {addVer?.find((i: any) => i.sl == 3) ? (
            <AddCard
              image={addVer?.find((i: any) => i.sl == 3)?.advertisement?.base64}
              width={295}
              height={302}
            />
          ) : (
            <LoadingCard width={295} height={302} />
          )}
        </div>
        <div className="mb-5 md:mb-8 xl:mb-14">
          {/* add 4 */}
          {addVer?.find((i: any) => i.sl == 4) ? (
            <AddCard
              image={addVer?.find((i: any) => i.sl == 4)?.advertisement?.base64}
              width={295}
              height={426}
            />
          ) : (
            <LoadingCard width={295} height={426} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogsSection;
