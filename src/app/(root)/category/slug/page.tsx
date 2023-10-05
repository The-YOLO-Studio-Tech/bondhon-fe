import AllBlogsSection from '@/components/sections/blogs/AllBlogsSection';

const page = () => {
  return (
    <div className="mt-6 commonContainer xl:mt-8">
      <div className="text-center">
        <h2 className="text-[#392FA3] text-2xl font-bold xl:text-[42px]">প্রকৌশল</h2>
        <p className="text-[#392FA3] mt-4 xl:mt-5 xl:text-lg">হোম - স্থাপথ্য</p>
      </div>
      <div className="md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="col-span-9">
          <AllBlogsSection />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
};

export default page;
