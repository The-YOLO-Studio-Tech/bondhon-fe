import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

const DefaultFooter = () => {
  return (
    <div className="bg-[#392FA3] pb-5 pt-8 mt-7 text-white md:mt-8 xl:pb-8 xl:pt-10">
      <div className="commonContainer">
        <div className="flex justify-between mb-5 flex-col items-center md:flex-row md:items-start md:mb-7">
          <div className="space-y-3 md:space-y-6 xl:space-y-10">
            <div className="relative mx-auto w-fit md:mx-0">
              <Image src="/images/BandhanWhiteLogo.png" width={136} height={61} alt="logo" />
            </div>
            <p className="text-sm xl:text-lg">প্রকাশনায়ঃ আকিজ রিসোর্সেস লিমিটেড</p>
          </div>

          {/* <div className="space-y-5 text-center mt-5 md:mt-0 md:text-start xl:space-y-8">
            <div>
              <h5 className="font-semibold md:text-xs xl:text-lg">উপদেষ্টা</h5>
              <p className="md:text-xs xl:text-lg">স্থপতি সজল চৌধুরী</p>
            </div>
            <div>
              <h5 className="font-semibold md:text-xs xl:text-lg">সম্পাদক</h5>
              <p className="md:text-xs xl:text-lg">হিমেল চৌধুরী</p>
            </div>
            <div>
              <h5 className="font-semibold md:text-xs xl:text-lg">চিফ রিপোর্টার</h5>
              <p className="md:text-xs xl:text-lg">মাহফুজ ফারুক</p>
            </div>
          </div>

          <div className="space-y-5 text-center mt-5 md:mt-0 md:text-start xl:space-y-8">
            <div>
              <h5 className="font-semibold md:text-xs xl:text-lg">শিল্প নির্দেশক</h5>
              <p className="md:text-xs xl:text-lg">মোঃ সাইদুজ্জামান (জয়েস)</p>
            </div>
            <div>
              <h5 className="font-semibold md:text-xs xl:text-lg">সিনিয়র গ্রাফিক্স ডিজাইনার</h5>
              <p className="md:text-xs xl:text-lg">মোঃ আমিরুল ইসলাম</p>
            </div>
            <div>
              <h5 className="font-semibold md:text-xs xl:text-lg">বিজ্ঞাপন ও বিপণন</h5>
              <p className="md:text-xs xl:text-lg">সুলতান মাহমুদ</p>
            </div>
          </div> */}
          <div>
            <ul className="flex text-center my-6 flex-col space-y-3 md:space-y-5 xl:my-0 xl:space-y-10">
              <li>
                <Link href={'/about'}>বন্ধন</Link>
              </li>
              <li>
                <Link href={'/'}>বিজ্ঞাপন</Link>
              </li>
              <li>
                <Link href={'/privacy-policy'}>নীতিমালা</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-center md:text-right xl:text-lg">
              <span className="mb-3">সম্পাদকীয় ও বাণিজ্যিক কার্যালয়</span> <br />
              বন্ধন ম্যাগাজিন <br />
              আইবস লিমিটেড <br />
              ৬/২ কাজী নজরুল ইসলাম সড়ক <br />
              লালমাটিয়া, মোহাম্মাদপুর, ঢাকা-১২০৭ <br />
              ই-মেইলঃ bandhanbgd@gmail.com <br />
              যোগাযোগঃ ০১৭১১-৫৫৫০০৪, ০১৮১৭-৫২০৩৫৯
            </p>
          </div>
        </div>
        <p className="text-sm font-semibold pt-5 text-center border-t border-white md:pt-7 xl:text-lg">
          © ২০২৩ বন্ধন ম্যাগাজিন | সমস্ত অধিকার সংরক্ষিত
        </p>
      </div>
    </div>
  );
};

export default DefaultFooter;
