'use client';
import AddCard from '@/components/core/cart/AddCard';
import BlogCard from '@/components/core/cart/BlogCard';
import LoadingCard from '@/components/core/cart/LoadingCard';
// import BlogCard from '@/components/core/cart/BlogCard';
import { BlogType, useGetBlogData } from '@/hooks/querey/blog.tsq';
import { useGetPageContent } from '@/hooks/querey/pageContent.tsq';
import { convertDateFormat } from '@/libs/convertDateFormat';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const BlogDetailsHeader = ({ blog }: { blog: BlogType }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className=" justify-between items-end pb-5 border-b lg:flex xl:pb-7">
      <div>
        <h2 className="text-xl font-semibold mb-4 xl:mb-[22px] xl:text-3xl">{blog.title}</h2>
        {/* <h5 className="text-sm font-medium xl:text-[15px]">ব্লগ টি লিখেছেন- স্থপতি মৃধা রাতুল</h5> */}
        <p className="text-[#7B7C7D] text-xs xl:text-sm">
          প্রকাশ : {convertDateFormat(blog.created_at)}
        </p>
      </div>
      <div className="mt-5 xl:mt-0">
        {/* <h5 className="text-sm xl:text-[15px]">০৩ মিনিট রিডিং পড়ুন</h5> */}
        <div className="flex space-x-1 mt-4 items-center md:mt-7">
          <p className="font-normal text-sm text-[rgb(7,10,31)]">শেয়ার করুন :</p>
          <Link
            target="_blank"
            className="relative w-5 h-5 xl:h-7 xl:w-7"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
          >
            {' '}
            <Image
              className="cursor-pointer"
              src="/images/icons/face.png"
              layout="fill"
              objectFit="cover"
              alt="Fb icon"
            />
          </Link>

          <Link
            target="_blank "
            className="relative w-5 h-5 xl:h-7 xl:w-7"
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl,
            )}&text=${encodeURIComponent('Check out this amazing Blog')}`}
          >
            <Image
              className="cursor-pointer"
              src="/images/icons/twt.png"
              layout="fill"
              alt="Twitter icon"
            />
          </Link>

          <Link
            target="_blank"
            className="relative w-5 h-5 xl:h-7 xl:w-7"
            href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
              currentUrl,
            )}&title=${encodeURIComponent('Check out this amazing Blog')}`}
          >
            <Image
              className="cursor-pointer"
              src="/images/icons/linkedin.png"
              layout="fill"
              objectFit="cover"
              alt="Twitter icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogDetails = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={blog.thumbnail}
          className=""
          width={591}
          height={332}
          layout="responsive"
          objectFit="cover"
          alt="img"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: blog.description_html }}
        className="mt-5 xl:mt-10"
      ></div>
    </div>
  );
};

const AsideRelatatedBlog = ({ blog_title, category }: { blog_title: string; category: string }) => {
  const { data } = useGetBlogData(3, 0, category);

  return (
    <>
      {data &&
        data.results.map(
          (i: BlogType) => i.title !== blog_title && <BlogCard key={i.id} blog={i} />,
        )}
    </>
  );
};

// default component
const BlogDetailsContainer = () => {
  const { data } = useGetBlogData(3, 0);
  const { data: addData } = useGetPageContent('blog');
  return (
    <div>
      {data?.results[0] && <BlogDetailsHeader blog={data?.results[0]} />}
      <div className="grid pt-5 xl:pt-7 md:gap-5 md:grid-cols-6 xl:gap-7">
        <div className="md:col-span-4">
          {data?.results[0] && <BlogDetails blog={data?.results[0]} />}
        </div>
        {/* details side content */}
        <div className=" md:col-span-2">
          <div className="grid grid-cols-2 gap-5 mt-10 md:mt-0 md:space-y-5 md:gap-0 md:grid-cols-none xl:space-y-7">
            {data?.results[0] && (
              <AsideRelatatedBlog
                blog_title={data?.results[0]?.title}
                category={data?.results[0]?.category?.title}
              />
            )}
          </div>
          <div className="">
            {addData?.results?.[1]?.content?.blog_add6 ? (
              <AddCard
                image={addData?.results?.[1]?.content?.blog_add6?.add_banner}
                width={295}
                height={482}
              />
            ) : (
              <LoadingCard width={295} height={482} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContainer;
