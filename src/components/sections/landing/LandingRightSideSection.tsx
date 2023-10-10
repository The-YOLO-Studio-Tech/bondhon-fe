import AddCard from '@/components/core/cart/AddCard';
import CalculatorCart from '@/components/core/cart/CalculatorCart';
import DisplayCategory from '@/components/core/cart/DisplayCategory';
import LoadingCard from '@/components/core/cart/LoadingCard';
import ThumnileCategoryCart from '@/components/core/cart/ThumnileCategoryCart';

const LandingRightSideSection = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="mb-5 xl:mb-7">
        <DisplayCategory categoryNum="feature_post_category24" data={data} />
      </div>
      {data?.results?.[0]?.content?.add1 ? (
        <AddCard image={data?.results?.[0]?.content?.add1?.add_banner} width={295} height={333} />
      ) : (
        <LoadingCard width={295} height={333} />
      )}
      {/* <AddCard width={295} height={295} /> */}
      <div className="mt-8 xl:mt-[60px]">
        {data?.results?.[0]?.content?.add2 ? (
          <AddCard image={data?.results?.[0]?.content?.add2?.add_banner} width={295} height={609} />
        ) : (
          <LoadingCard width={295} height={609} />
        )}
      </div>
      <div className="space-y-5 my-5 xl:my-7">
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
      <div className="">
        {data?.results?.[0]?.content?.add3 ? (
          <AddCard image={data?.results?.[0]?.content?.add3?.add_banner} width={295} height={317} />
        ) : (
          <LoadingCard width={295} height={317} />
        )}
      </div>
      <div className="space-y-5 mt-5 xl:mt-7 xl:space-y-7">
        <DisplayCategory categoryNum="feature_post_category24" data={data} />
        <DisplayCategory categoryNum="feature_post_category25" data={data} />
        <DisplayCategory categoryNum="feature_post_category26" data={data} />
      </div>
      <div className="mt-5 xl:mt-7">
        <CalculatorCart />
      </div>
    </div>
  );
};

export default LandingRightSideSection;
