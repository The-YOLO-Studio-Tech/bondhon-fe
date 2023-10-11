'use client';
import React from 'react';
import BlogCard from '../../core/cart/BlogCard';
import { BlogType, useGetBlogData } from '@/hooks/querey/blog.tsq';

const AllBlogsSection = () => {
  const { data } = useGetBlogData();

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mt-10 md:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:mt-16 xl:gap-7">
        {data && data?.results.map((i: BlogType) => <BlogCard key={i.id} blog={i} />)}
      </div>
    </div>
  );
};

export default AllBlogsSection;
