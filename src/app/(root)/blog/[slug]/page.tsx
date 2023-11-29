import BlogDetailsContainer from '@/components/sections/blogs/BlogDetailsContainer';

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="commonContainer mt-7 xl:mt-10">
      <BlogDetailsContainer slug={params.slug} />
      {/* <WritterRelatedBlogSection /> ?title=${params.slug}*/}
    </div>
  );
};

export default BlogDetails;
