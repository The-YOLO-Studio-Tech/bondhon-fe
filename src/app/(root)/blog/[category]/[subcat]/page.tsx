import AllBlogsSection from '@/components/sections/blogs/AllBlogsSection';
import Link from 'next/link';
import React from 'react';

type Paramas = { params: { category: string; subcat: string } };

const SubCategoryPage = ({ params }: Paramas) => {
  return (
    <div>
      <div className="mt-6 commonContainer xl:mt-8">
        <div className="text-center">
          <h2 className="text-[#392FA3] text-2xl font-bold xl:text-[42px]">
            {decodeURIComponent(params.category)}
          </h2>
          <p className="text-[#392FA3] mt-4 xl:mt-5 xl:text-lg">
            <Link href={'/'}>হোম</Link> - {decodeURIComponent(params.subcat)}
          </p>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
          <div className="col-span-9">
            <AllBlogsSection c_title={params.category} s_title={params.subcat} />
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryPage;
