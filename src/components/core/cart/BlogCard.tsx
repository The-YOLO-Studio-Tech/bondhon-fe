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
      <div className="pl-3 pb-3 pt-2 pr-2 bg-[#F9F9F9] xl:pl-8 xl:pb-5 xl:pt-3 xl:pr-4">
        <h3 className="font-medium truncate text-[#070A1F] py-2 xl:pt-4 xl:pb-3 xl:text-xl">
          {blog.title}
        </h3>
        <div className="h-14">
          {blog?.short_description && (
            <p className="text-[#4E4E4E] leading-[140%] text-xs xl:text-[15px]">
              {blog?.short_description?.length > 70
                ? blog?.short_description.slice(0, 70) + '...'
                : blog?.short_description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
