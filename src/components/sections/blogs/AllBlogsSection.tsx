'use client';
import React from 'react';
import BlogCard from '../../core/cart/BlogCard';
import { BlogType, useGetBlogData } from '@/hooks/querey/blog.tsq';
import LoadingCard from '@/components/core/cart/LoadingCard';
import AddCard from '@/components/core/cart/AddCard';

const AllBlogsSection = ({
  c_title = '',
  s_title = '',
  addData,
}: {
  c_title?: string;
  s_title?: string;
  addData?: any;
}) => {
  const { data, isLoading } = useGetBlogData(50, 0, c_title, s_title);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mt-10 md:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:mt-16 xl:gap-7">
        {isLoading
          ? [...new Array(4)].map(() => (
              <LoadingCard key={Math.random()} width={295} height={239} />
            ))
          : data?.results.slice(0, 6).map((i: BlogType) => <BlogCard key={i.id} blog={i} />)}
      </div>
      <div className="my-8 md:my-10 xl:my-[60px]">
        {addData?.results?.[1]?.content?.blog_add5 ? (
          <AddCard
            image={addData?.results?.[1]?.content?.blog_add5?.add_banner}
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
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10 md:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:mt-16 xl:gap-7">
        {isLoading
          ? [...new Array(4)].map(() => (
              <LoadingCard key={Math.random()} width={295} height={239} />
            ))
          : data?.results
              .slice(7, data.length)
              .map((i: BlogType) => <BlogCard key={i.id} blog={i} />)}
      </div>

      {/* mbl bottomAdd section */}
      <div className="grid grid-cols-2 gap-5 px-2 mt-7 md:hidden">
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
  );
};

export default AllBlogsSection;
