import AddCard from '@/components/core/cart/AddCard';
// import CalculatorCart from '@/components/core/cart/CalculatorCart';
import DisplayCategory from '@/components/core/cart/DisplayCategory';
import LoadingCard from '@/components/core/cart/LoadingCard';
import ThumnileCategoryCart from '@/components/core/cart/ThumnileCategoryCart';
import { VideoCategoryCart } from '@/components/core/cart/VideoCart';
import { useGetLandingAdd, useGetLandingPageCategory } from '@/hooks/querey/pageContent.tsq';

const LandingRightSideSection = () => {
  const { data: lansingAdd } = useGetLandingAdd();
  const { data: landingCat } = useGetLandingPageCategory();

  return (
    <div>
      <div className="mb-5 mt-5 md:mt-0 xl:mb-7">
        <VideoCategoryCart />
      </div>
      <div className="px-4 md:px-0">
        {/* add 4 */}
        {lansingAdd?.find((i: any) => i.sl == 6) ? (
          <AddCard
            image={lansingAdd?.find((i: any) => i.sl == 6)?.advertisement?.base64}
            width={295}
            height={322}
          />
        ) : (
          <LoadingCard width={295} height={333} />
        )}
      </div>

      <div className="mt-7 px-4 pt-[3px] md:px-0 md:mt-8">
        {/* add 5 */}
        {lansingAdd?.find((i: any) => i.sl == 5) ? (
          <AddCard
            image={lansingAdd?.find((i: any) => i.sl == 5)?.advertisement?.base64}
            width={295}
            height={603}
          />
        ) : (
          <LoadingCard width={295} height={603} />
        )}
      </div>
      <div className=" grid grid-cols-2 mb-7 mt-5 gap-5 md:space-y-5 xl:space-y-4 md:grid-cols-none md:mb-7 md:gap-0 xl:mt-7">
        {/* cat 20 to 23 */}
        <ThumnileCategoryCart isHight={true} data={landingCat?.find((i: any) => i.sl == 20)} />
        <ThumnileCategoryCart isHight={true} data={landingCat?.find((i: any) => i.sl == 21)} />
        <ThumnileCategoryCart isHight={true} data={landingCat?.find((i: any) => i.sl == 22)} />
        <ThumnileCategoryCart isHight={true} data={landingCat?.find((i: any) => i.sl == 23)} />
      </div>
      <div className="px-4 md:px-0">
        {/* add 6 */}
        {lansingAdd?.find((i: any) => i.sl == 4) ? (
          <AddCard
            image={lansingAdd?.find((i: any) => i.sl == 4)?.advertisement?.base64}
            width={295}
            height={603}
          />
        ) : (
          <LoadingCard width={295} height={603} />
        )}
      </div>
      <div className=" mt-7 grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-none md:space-y-4 md:mt-[33px] lg:space-y-5 xl:space-y-6">
        {/* cat 24 tp 26 */}
        <DisplayCategory data={landingCat?.find((i: any) => i.sl == 24)} />
        <DisplayCategory data={landingCat?.find((i: any) => i.sl == 25)} />
        <DisplayCategory data={landingCat?.find((i: any) => i.sl == 26)} />

        {/* <div className="md:hidden">
          <CalculatorCart />
        </div> */}
      </div>
      {/* <div className="mt-5 hidden md:block xl:mt-6">
        <CalculatorCart />
      </div> */}
    </div>
  );
};

export default LandingRightSideSection;
