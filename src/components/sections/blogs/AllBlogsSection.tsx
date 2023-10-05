import React from 'react';
import BlogCard from '../../core/cart/BlogCard';

const AllBlogsSection = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mt-10 md:mt-12 md:grid-cols-2 xl:grid-cols-3 xl:mt-16 xl:gap-7">
        {[...new Array(6)].map(() => (
          <BlogCard key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsSection;
