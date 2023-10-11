import BlogDetailsContainer from '@/components/sections/blogs/BlogDetailsContainer';
// import WritterRelatedBlogSection from '@/components/sections/blogs/WritterRelatedBlogSection';
import { AddCard } from '@mui/icons-material';
import React from 'react';

const PostDetails = () => {
  return (
    <div className="commonContainer mt-7 xl:mt-10">
      <div className="mb-10 xl:mb-16">
        <AddCard width={1270} height={275} />
      </div>
      <BlogDetailsContainer />
      {/* <WritterRelatedBlogSection /> */}
    </div>
  );
};

export default PostDetails;
