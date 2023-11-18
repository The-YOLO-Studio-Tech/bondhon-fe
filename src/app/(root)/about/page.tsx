import React from 'react';

const AboutPage = () => {
  return (
    <div className="commonContainer pt-4 md:pt-5">
      <h1 className="font-bold text-3xl text-[#392FA3] mb-6 text-center">বন্ধন</h1>
      <div className="grid grid-cols-2 gap-4 md:gap-6 xl:gap-8">
        <div className="p-3 text-center shadow-sm md:p-5">
          <h2 className="font-bold text-lg">উপদেষ্টা</h2>
          <p>স্থপতি সজল চৌধুরী</p>
        </div>
        <div className="p-3 text-center shadow-sm md:p-5">
          <h2 className="font-bold text-lg">সম্পাদক</h2>
          <p>হিমেল চৌধুরী</p>
        </div>
        <div className="p-3 text-center shadow-sm md:p-5">
          <h2 className="font-bold text-lg">চিফ রিপোর্টার</h2>
          <p>মাহফুজ ফারুক</p>
        </div>
        <div className="p-3 text-center shadow-sm md:p-5">
          <h2 className="font-bold text-lg">শিল্প নির্দেশক</h2>
          <p>মোঃ সাইদুজ্জামান (জয়েস)</p>
        </div>
        <div className="p-3 text-center shadow-sm md:p-5">
          <h2 className="font-bold text-lg">সিনিয়র গ্রাফিক্স ডিজাইনার</h2>
          <p>মোঃ আমিরুল ইসলাম</p>
        </div>
        <div className="p-3 text-center shadow-sm md:p-5">
          <h2 className="font-bold text-lg">বিজ্ঞাপন ও বিপণন</h2>
          <p>সুলতান মাহমুদ</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
