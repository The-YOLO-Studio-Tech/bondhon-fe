import {
  // DashFeaturedCard,
  DashCategoryCard,
} from './@assets/Cards';
import FeaturePostCategory from './@assets/FeaturePostCategory';
import AddPost from './@assets/SquareAddPost';
import TopFeaturePost from './@assets/TopFeaturePost';

const LandingSettings = () => {
  return (
    <>
      <div className="mt-10">
        <AddPost addNum="topAdd" />
      </div>
      <div className="py-10 md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="col-span-9">
          {/* header section */}
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2">
              <TopFeaturePost />
            </div>
            <div className="col-span-1 grid grid-rows-4 gap-7">
              <FeaturePostCategory categoryNum={'feature_post_category1'} />
              <FeaturePostCategory categoryNum={'feature_post_category2'} />
              <FeaturePostCategory categoryNum={'feature_post_category3'} />
              <FeaturePostCategory categoryNum={'feature_post_category4'} />
            </div>
          </div>

          {/* add section */}
          <div className="my-10">
            <AddPost addNum="add4" />
          </div>

          {/* category card section */}
          <div className="my-8 grid grid-cols-3 gap-7">
            <FeaturePostCategory categoryNum={'feature_post_category5'} />
            <FeaturePostCategory categoryNum={'feature_post_category6'} />
            <FeaturePostCategory categoryNum={'feature_post_category7'} />
            <FeaturePostCategory categoryNum={'feature_post_category8'} />
            <FeaturePostCategory categoryNum={'feature_post_category9'} />
            <FeaturePostCategory categoryNum={'feature_post_category10'} />
            <FeaturePostCategory categoryNum={'feature_post_category11'} />
            <FeaturePostCategory categoryNum={'feature_post_category12'} />
            <FeaturePostCategory categoryNum={'feature_post_category13'} />
          </div>

          {/* add section */}
          <div className="my-10">
            <AddPost addNum="add5" />
          </div>

          {/* more category card section */}
          <div className="my-8 grid grid-cols-3 gap-7">
            <FeaturePostCategory categoryNum={'feature_post_category14'} />
            <FeaturePostCategory categoryNum={'feature_post_category15'} />
            <FeaturePostCategory categoryNum={'feature_post_category16'} />
            <FeaturePostCategory categoryNum={'feature_post_category17'} />
            <FeaturePostCategory categoryNum={'feature_post_category18'} />
            <FeaturePostCategory categoryNum={'feature_post_category19'} />
          </div>
        </div>

        {/* right side section */}
        <div className="col-span-3">
          <div>
            <DashCategoryCard />
          </div>
          <div className="mt-7">
            <AddPost addNum="add1" />
          </div>
          <div className="mt-10">
            <AddPost addNum="add2" />
          </div>
          <div className="grid space-y-7 mt-8">
            <FeaturePostCategory categoryNum={'feature_post_category20'} />
            <FeaturePostCategory categoryNum={'feature_post_category21'} />
            <FeaturePostCategory categoryNum={'feature_post_category22'} />
            <FeaturePostCategory categoryNum={'feature_post_category23'} />
          </div>
          <div className="mt-10">
            <AddPost addNum="add3" />
          </div>

          <div className="grid space-y-7 mt-8">
            <FeaturePostCategory categoryNum={'feature_post_category24'} />
            <FeaturePostCategory categoryNum={'feature_post_category25'} />
            <FeaturePostCategory categoryNum={'feature_post_category26'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSettings;
