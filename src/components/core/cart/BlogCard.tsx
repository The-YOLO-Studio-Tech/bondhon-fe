import { BlogType } from '@/hooks/querey/blog.tsq';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Link className=" border border-[#CACACA] h-fit" href={`/post/${blog.title}`}>
      <div className="relative">
        <Image
          src={blog.thumbnail}
          width={295}
          height={239}
          layout="responsive"
          objectFit="cover"
          alt="thumbnail"
        />
      </div>
      <div className="pl-4 pb-4 pt-3 pr-3 bg-[#F9F9F9] xl:pl-8 xl:pb-8 xl:pt-5 xl:pr-4">
        <h3 className="font-medium truncate text-[#070A1F] py-2 xl:pt-5 xl:pb-4 xl:text-xl">
          {blog.title}
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html:
              blog.description_html?.length > 70
                ? blog.description_html.slice(0, 70) + '...'
                : blog.description_html,
          }}
          className="text-[#4E4E4E] text-xs xl:text-[15px]"
        ></p>
      </div>
    </Link>
  );
};

export default BlogCard;
