'use client';
import AddCard from '@/components/core/cart/AddCard';
import LoadingCard from '@/components/core/cart/LoadingCard';
import BlogDetailsContainer from '@/components/sections/blogs/BlogDetailsContainer';
import { useGetPageContent } from '@/hooks/querey/pageContent.tsq';
// import WritterRelatedBlogSection from '@/components/sections/blogs/WritterRelatedBlogSection';
import React from 'react';

const PostDetails = () => {
  const { data: addData } = useGetPageContent('blog');
  return (
    <div className="commonContainer mt-7 xl:mt-10">
      <div className="mb-10 xl:mb-16">
        <div className="mb-5 md:mb-8 xl:mb-14">
          {addData?.results?.[1]?.content?.blog_add6 ? (
            <AddCard
              image={addData?.results?.[1]?.content?.blog_add6?.add_banner}
              width={1270}
              height={275}
            />
          ) : (
            <LoadingCard width={1270} height={275} />
          )}
        </div>
      </div>
      <BlogDetailsContainer />
      {/* <WritterRelatedBlogSection /> */}
    </div>
  );
};

export default PostDetails;
