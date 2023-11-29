'use client';
import AddCard from '@/components/core/cart/AddCard';
import LoadingCard from '@/components/core/cart/LoadingCard';
// import BlogCard from '@/components/core/cart/BlogCard';
import { useGetSingleBlogData } from '@/hooks/querey/blog.tsq';
import { useGetSingleBlogAdd } from '@/hooks/querey/pageContent.tsq';
import { convertDateFormat } from '@/libs/convertDateFormat';
import Image from 'next/legacy/image';
import Link from 'next/link';

const BlogDetailsHeader = ({ blog }: { blog: any }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className=" justify-between items-end pb-5 border-b lg:flex xl:pb-7">
      <div>
        <h2 className="text-xl font-semibold mb-4 xl:mb-[22px] xl:text-3xl">{blog.title}</h2>
        {/* <h5 className="text-sm font-medium xl:text-[15px]">ব্লগ টি লিখেছেন- স্থপতি মৃধা রাতুল</h5> */}
        <p className="text-[#7B7C7D] text-xs xl:text-sm">
          প্রকাশ : {convertDateFormat(blog.createdAt)}
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

const BlogDetails = ({ blog }: { blog: any }) => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={blog.thumbnail_b64}
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

// const AsideRelatatedBlog = ({ blog_title, category }: { blog_title: string; category: string }) => {
//   const { data } = useGetBlogData(3, 0, category);

//   return (
//     <>
//       {data &&
//         data.results.map(
//           (i: BlogType) => i.title !== blog_title && <BlogCard key={i.id} blog={i} />,
//         )}
//     </>
//   );
// };

// default component
const BlogDetailsContainer = ({ slug }: { slug: string }) => {
  const { data } = useGetSingleBlogData(slug);
  const { data: addVer } = useGetSingleBlogAdd();
  // console.error(data);

  return (
    <>
      <div className="mb-10 xl:mb-16">
        <div className="mb-5 md:mb-8 xl:mb-14">
          {/* add 1 */}
          {addVer?.find((i: any) => i.sl == 1) ? (
            <AddCard
              image={addVer?.find((i: any) => i.sl == 1)?.advertisement?.base64}
              width={1270}
              height={275}
            />
          ) : (
            <LoadingCard width={1270} height={275} />
          )}
        </div>
      </div>
      {/*  */}
      <div>
        {data?.[0] && <BlogDetailsHeader blog={data?.[0]} />}
        <div className="grid pt-5 xl:pt-7 md:gap-5 md:grid-cols-6 xl:gap-7">
          <div className="md:col-span-4">{data?.[0] && <BlogDetails blog={data?.[0]} />}</div>
          {/* details side content */}
          <div className=" md:col-span-2">
            <div className="grid grid-cols-2 gap-5 mt-10 md:mt-0 md:space-y-5 md:gap-0 md:grid-cols-none xl:space-y-7">
              {/* {data?.results[0] && (
              <AsideRelatatedBlog
                blog_title={data?.results[0]?.title}
                category={data?.results[0]?.category?.title}
              />
            )} */}
            </div>
            <div className="">
              {addVer?.find((i: any) => i.sl == 1) ? (
                <AddCard
                  image={addVer?.find((i: any) => i.sl == 1)?.advertisement?.base64}
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
    </>
  );
};

export default BlogDetailsContainer;
