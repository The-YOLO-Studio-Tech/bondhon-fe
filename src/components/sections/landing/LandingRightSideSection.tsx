import AddCard from '@/components/core/cart/AddCard';
import CalculatorCart from '@/components/core/cart/CalculatorCart';
import DisplayCategory from '@/components/core/cart/DisplayCategory';
import LoadingCard from '@/components/core/cart/LoadingCard';
import ThumnileCategoryCart from '@/components/core/cart/ThumnileCategoryCart';
import { VideoCategoryCart } from '@/components/core/cart/VideoCart';

const LandingRightSideSection = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="mb-5 mt-5 md:mt-0 xl:mb-7">
        <VideoCategoryCart />
      </div>
      <div className="px-4 md:px-0">
        {data?.results?.[0]?.content?.add1 ? (
          <AddCard image={data?.results?.[0]?.content?.add1?.add_banner} width={295} height={333} />
        ) : (
          <LoadingCard width={295} height={333} />
        )}
      </div>
      {/* <AddCard width={295} height={295} /> */}
      <div className="mt-8 px-4 md:px-0 xl:mt-[60px]">
        {data?.results?.[0]?.content?.add2 ? (
          <AddCard image={data?.results?.[0]?.content?.add2?.add_banner} width={295} height={634} />
        ) : (
          <LoadingCard width={295} height={626} />
        )}
      </div>
      <div className=" grid grid-cols-2 mb-5 mt-5 gap-5 md:space-y-5 xl:space-y-6 md:grid-cols-none md:mb-10 md:gap-0 xl:mt-7 xl:mb-[60px]">
        <ThumnileCategoryCart
          categoryNum="feature_post_category20"
          data={data}
          key={Math.random()}
        />
        <ThumnileCategoryCart
          categoryNum="feature_post_category21"
          data={data}
          key={Math.random()}
        />
        <ThumnileCategoryCart
          categoryNum="feature_post_category22"
          data={data}
          key={Math.random()}
        />
        <ThumnileCategoryCart
          categoryNum="feature_post_category23"
          data={data}
          key={Math.random()}
        />
      </div>
      <div className="px-4 md:px-0">
        {data?.results?.[0]?.content?.add3 ? (
          <AddCard image={data?.results?.[0]?.content?.add3?.add_banner} width={295} height={317} />
        ) : (
          <LoadingCard width={295} height={317} />
        )}
      </div>
      <div className=" mt-10 grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-none md:space-y-5 xl:mt-[60px] xl:space-y-7">
        <DisplayCategory categoryNum="feature_post_category24" data={data} />
        <DisplayCategory categoryNum="feature_post_category25" data={data} />
        <DisplayCategory categoryNum="feature_post_category26" data={data} />
        <div className='md:hidden'>
        <CalculatorCart />
        </div>
      </div>
      <div className="mt-5 hidden md:block xl:mt-6">
        <CalculatorCart />
      </div>
    </div>
  );
};

export default LandingRightSideSection;
