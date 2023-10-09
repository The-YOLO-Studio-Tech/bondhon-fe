import {
  DashCategoryCard,
  // DashFeaturedCard,
  DashLargeAddCard,
  DashRegularAddCard,
  DashSideCategoryCard,
  DashVerticalAddCard,
} from './@assets/Cards';
import TopFeaturePost from './@assets/TopFeaturePost';

const LandingSettings = () => {
  return (
    <div className="pb-10 md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
      <div className="col-span-9">
        {/* header section */}
        <div className="grid grid-cols-3 gap-7">
          <div className="col-span-2">
            <TopFeaturePost />
          </div>
          <div className="col-span-1 grid grid-rows-4 gap-7">
            <DashSideCategoryCard />
            <DashSideCategoryCard />
            <DashSideCategoryCard />
            <DashSideCategoryCard />
          </div>
        </div>

        {/* add section */}
        <div className="my-10">
          <DashLargeAddCard />
        </div>

        {/* category card section */}
        <div className="my-8 grid grid-cols-3 gap-7">
          <DashCategoryCard />
          <DashCategoryCard />
          <DashCategoryCard />
          <DashCategoryCard />
          <DashCategoryCard />
          <DashCategoryCard />
        </div>

        {/* add section */}
        <div className="my-10">
          <DashLargeAddCard />
        </div>

        {/* more category card section */}
        <div className="my-8 grid grid-cols-3 gap-7">
          <DashCategoryCard />
          <DashCategoryCard />
          <DashCategoryCard />
          <DashCategoryCard />
          <DashCategoryCard />
          <DashCategoryCard />
        </div>
      </div>

      {/* right side section */}
      <div className="col-span-3">
        <div>
          <DashCategoryCard />
        </div>
        <div className="mt-7">
          <DashRegularAddCard />
        </div>
        <div className="mt-10">
          <DashVerticalAddCard width={273} height={548} />
        </div>
        <div className="grid space-y-7 mt-8">
          <DashSideCategoryCard />
          <DashSideCategoryCard />
          <DashSideCategoryCard />
          <DashSideCategoryCard />
        </div>
        <div className="mt-10">
          <DashVerticalAddCard width={273} height={430} />
        </div>

        <div className="grid space-y-7 mt-8">
          <DashCategoryCard />
          <DashCategoryCard />
        </div>
      </div>
    </div>
  );
};

export default LandingSettings;
