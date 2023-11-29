import FeaturePostCategory from './@assets/FeaturePostCategory';
import FeaturedVideo from './@assets/FeaturedVideo';
import AddPost from './@assets/SquareAddPost';
import TopFeaturePost from './@assets/TopFeaturePost';

const LandingSettings = () => {
  return (
    <>
      <div className="mt-10 w-56">
        <AddPost addNum="1" />
      </div>
      <div className="py-10 md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="col-span-9">
          {/* header section */}
          <div className="grid grid-cols-3 gap-7">
            <div className="col-span-2">
              <TopFeaturePost />
            </div>
            <div className="col-span-1 grid grid-rows-4 gap-7">
              <FeaturePostCategory sl={'1'} />
              <FeaturePostCategory sl={'2'} />
              <FeaturePostCategory sl={'3'} />
              <FeaturePostCategory sl={'4'} />
            </div>
          </div>

          {/* add section */}
          <div className="my-10">
            <AddPost addNum="2" />
          </div>

          {/* category card section */}
          <div className="my-8 grid grid-cols-3 gap-7">
            <FeaturePostCategory sl={'5'} />
            <FeaturePostCategory sl={'6'} />
            <FeaturePostCategory sl={'7'} />
            <FeaturePostCategory sl={'8'} />
            <FeaturePostCategory sl={'9'} />
            <FeaturePostCategory sl={'10'} />
            <FeaturePostCategory sl={'11'} />
            <FeaturePostCategory sl={'12'} />
            <FeaturePostCategory sl={'13'} />
          </div>

          {/* add section */}
          <div className="my-10">
            <AddPost addNum="3" />{' '}
          </div>

          {/* more category card section */}
          <div className="my-8 grid grid-cols-3 gap-7">
            <FeaturePostCategory sl={'14'} />
            <FeaturePostCategory sl={'15'} />
            <FeaturePostCategory sl={'16'} />
            <FeaturePostCategory sl={'17'} />
            <FeaturePostCategory sl={'18'} />
            <FeaturePostCategory sl={'19'} />
          </div>
        </div>

        {/* right side section */}
        <div className="col-span-3">
          <div>
            <FeaturedVideo />
          </div>
          <div className="mt-7">
            <AddPost addNum="4" />
          </div>
          <div className="mt-10">
            <AddPost addNum="5" />
          </div>
          <div className="grid space-y-7 mt-8">
            <FeaturePostCategory sl={'20'} />
            <FeaturePostCategory sl={'21'} />
            <FeaturePostCategory sl={'22'} />
            <FeaturePostCategory sl={'23'} />
          </div>
          <div className="mt-10">
            <AddPost addNum="6" />
          </div>

          <div className="grid space-y-7 mt-8">
            <FeaturePostCategory sl={'24'} />
            <FeaturePostCategory sl={'25'} />
            <FeaturePostCategory sl={'16'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSettings;
