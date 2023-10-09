import BlogCard from '@/components/core/cart/BlogCard';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const BlogDetailsHeader = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <div className=" justify-between items-end pb-5 border-b lg:flex xl:pb-7">
      <div>
        <h2 className="text-xl font-semibold mb-4 xl:mb-[22px] xl:text-3xl">
          শিকড় থেকে সুউচ্চ শিখরে শিকড় থেকে সুউচ্চ শিখরে
        </h2>
        <h5 className="text-sm font-medium xl:text-[15px]">ব্লগ টি লিখেছেন- স্থপতি মৃধা রাতুল</h5>
        <p className="text-[#7B7C7D] text-xs xl:text-sm">প্রকাশ : ২২ মার্চ ২০২৩, ২২:৪০</p>
      </div>
      <div className="mt-5 xl:mt-0">
        <h5 className="text-sm xl:text-[15px]">০৩ মিনিট রিডিং পড়ুন</h5>
        <div className="flex space-x-1 mt-4 items-center md:mt-7">
          <p className="font-normal text-sm text-[rgb(7,10,31)] dark:text-white">শেয়ার করুন :</p>
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

const BlogDetails = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src="https://placehold.co/600x400.png?text=Card"
          className=""
          width={591}
          height={332}
          layout="responsive"
          objectFit="cover"
          alt="img"
        />
      </div>
      <p className="mt-5 xl:mt-10">
        আপনার কি সব সময় ক্লান্ত লাগে? কেবলই ঘুম পায় সারা দিন? মনে রাখবেন, এই সমস্যা শুধু আপনার একার
        না। গবেষণা বলছে, প্রতি পাঁচজন প্রাপ্তবয়স্কের একজন সপ্তাহে অন্তত তিন দিন দিনের বেলায় অত্যধিক
        ঘুমের সমস্যায় ভুগছেন। দীর্ঘস্থায়ী ক্লান্তি আপনার জীবনযাত্রার মান যেমন কমিয়ে দিতে পারে,
        অন্যদিকে এই ঘুম ঘুম ভাব হতে পারে কোনো রোগেরও লক্ষণ। তাই বিষয়টিকে হেলাফেলা করার সুযোগ নেই।
        এমন কেন হয় সুস্বাস্থ্যের জন্য প্রতিদিন সাত থেকে আট ঘণ্টা ঘুম দরকার। অপর্যাপ্ত ঘুম ক্লান্তির
        একটি সাধারণ কারণ। মানসিক চাপ, রোগ ও পরিবেশ ঘুমকে নেতিবাচকভাবে প্রভাবিত করতে পারে, ফলে কাটাতে
        হতে পারে নিদ্রাহীন রাত। আপনার যদি ইনসমনিয়া থাকে, তবে ডাক্তারের সঙ্গে পরামর্শ করুন। আয়রন,
        ভিটামিন বি১২, ডি-র মতো কিছু পুষ্টিঘাটতি ক্লান্তির কারণ হতে পারে। অত্যধিক চাপ ক্লান্তি তৈরি
        করতে পারে। নিজের জন্যও সময় রাখুন। অনেক রোগ ক্লান্তির সঙ্গে যুক্ত যেমন স্লিপ অ্যাপনিয়া,
        হাইপোথাইরয়েডিজম, ক্যানসার, ক্রনিক ফ্যাটিগ সিনড্রোম, মাল্টিপল স্ক্লেরোসিস, কিডনি রোগ,
        বিষণ্নতা, ডায়াবেটিস ও ফাইব্রোমায়ালজিয়া। অনেকদিন ধরে আপনার যদি ক্লান্ত ভাব থাকে, তবে উপযুক্ত
        পরীক্ষার জন্য চিকিৎসকের পরামর্শ প্রয়োজন।
      </p>
    </div>
  );
};

// default component
const BlogDetailsContainer = () => {
  return (
    <div>
      <BlogDetailsHeader />
      <div className="grid pt-5 xl:pt-7 md:gap-5 md:grid-cols-6 xl:gap-7">
        <div className="md:col-span-4">
          <BlogDetails />
        </div>
        {/* details side content */}
        <div className="grid grid-cols-2 gap-5 mt-10 md:mt-0 md:col-span-2 md:space-y-5 md:gap-0 md:grid-cols-none xl:space-y-7">
          {[...new Array(2)].map(() => (
            <BlogCard key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContainer;
