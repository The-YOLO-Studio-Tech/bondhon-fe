'use client';
import AddCard from '@/components/core/cart/AddCard';
import LoadingCard from '@/components/core/cart/LoadingCard';
import CategorySection, {
  BottomCategorySection,
} from '@/components/sections/landing/CategorySection';
import HeroSection from '@/components/sections/landing/HeroSection';
import LandingRightSideSection from '@/components/sections/landing/LandingRightSideSection';
import MagazineAndArChiveSection from '@/components/sections/landing/MagazineAndArChiveSection';
import { useGetLandingAdd } from '@/hooks/querey/pageContent.tsq';

// import MagazineAndArChiveSection from '@/components/sections/landing/MagazineAndArChiveSection';

const Home = () => {
  const { data: lansingAdd } = useGetLandingAdd();

  return (
    <main className="commonContainer pt-4 md:pt-5 ">
      <div className="md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="md:col-span-9">
          <HeroSection />
          <div className="mt-7 md:mt-8">
            {/* add 2 */}
            {lansingAdd?.find((i: any) => i.sl == 2) ? (
              <AddCard
                image={lansingAdd?.find((i: any) => i.sl == 2)?.advertisement?.base64}
                width={947}
                height={257}
              />
            ) : (
              <LoadingCard width={947} height={257} />
            )}
          </div>
          <CategorySection />

          <div className="">
            {/* add 3 */}
            {lansingAdd?.find((i: any) => i.sl == 3) ? (
              <AddCard
                image={lansingAdd?.find((i: any) => i.sl == 3)?.advertisement?.base64}
                width={947}
                height={257}
              />
            ) : (
              <LoadingCard width={947} height={257} />
            )}
          </div>
          <div>
            <MagazineAndArChiveSection />{' '}
          </div>
          <div className="">
            <BottomCategorySection />
          </div>
        </div>
        <div className="md:col-span-3">
          <LandingRightSideSection />{' '}
        </div>
      </div>
    </main>
  );
};

export default Home;
