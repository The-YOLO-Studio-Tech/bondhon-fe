// import BlogCard from '@/components/core/cart/BlogCard';
import React from 'react';

const WritterRelatedBlogSection = () => {
  return (
    <div className="mt-12 md:mt-16 xl:mt-20">
      <h2 className="text-xl font-semibold mb-6 md:mb-8 md:text-2xl xl:mb-12 xl:text-4xl">
        আরও লেখা পড়ুন
      </h2>
      <div className="grid grid-cols-2 gap-5 md:gap-7 md:grid-cols-4">
        {/* {[...new Array(4)].map(() => (
          <BlogCard key={Math.random()} />
        ))} */}
      </div>
    </div>
  );
};

export default WritterRelatedBlogSection;
