import BlogDetailsContainer from '@/components/sections/blogs/BlogDetailsContainer';
import WritterRelatedBlogSection from '@/components/sections/blogs/WritterRelatedBlogSection';
import React from 'react';

const BlogDetails = () => {
  return (
    <div className="commonContainer mt-7 xl:mt-10">
      <BlogDetailsContainer />
      <WritterRelatedBlogSection />
    </div>
  );
};

export default BlogDetails;
