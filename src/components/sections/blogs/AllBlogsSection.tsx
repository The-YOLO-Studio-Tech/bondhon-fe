'use client';
import React from 'react';
import BlogCard from '../../core/cart/BlogCard';
import { BlogType, useGetBlogData } from '@/hooks/querey/blog.tsq';

const AllBlogsSection = ({ c_title = '', s_title = '' }: { c_title: string; s_title: string }) => {
  const { data } = useGetBlogData(50, 0, c_title, s_title);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mt-10 md:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:mt-16 xl:gap-7">
        {data && data?.results.map((i: BlogType) => <BlogCard key={i.id} blog={i} />)}
      </div>
    </div>
  );
};

export default AllBlogsSection;
