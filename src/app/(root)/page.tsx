'use client';
import AddCard from '@/components/core/cart/AddCard';
import LoadingCard from '@/components/core/cart/LoadingCard';
import CategorySection, {
  BottomCategorySection,
} from '@/components/sections/landing/CategorySection';
import HeroSection from '@/components/sections/landing/HeroSection';
import LandingRightSideSection from '@/components/sections/landing/LandingRightSideSection';
import MagazineAndArChiveSection from '@/components/sections/landing/MagazineAndArChiveSection';
import { useGetPageContent } from '@/hooks/querey/pageContent.tsq';
import { CircularProgress } from '@mui/material';

const Home = () => {
  const { data, isLoading } = useGetPageContent('home');
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <main className="commonContainer pt-4 md:pt-5 ">
      <div className="md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="md:col-span-9">
          <HeroSection />
          <div className="mt-7 md:mt-8">
            {data?.results?.[0]?.content?.add4 ? (
              <AddCard
                image={data?.results?.[0]?.content?.add4?.add_banner}
                width={947}
                height={257}
              />
            ) : (
              <LoadingCard width={947} height={257} />
            )}
          </div>
          <CategorySection data={data} />

          <div className="">
            {data?.results?.[0]?.content?.add5 ? (
              <AddCard
                image={data?.results?.[0]?.content?.add5?.add_banner}
                width={947}
                height={257}
              />
            ) : (
              <LoadingCard width={947} height={257} />
            )}
          </div>
          <div>
            <MagazineAndArChiveSection />
          </div>
          <div className="">
            <BottomCategorySection data={data} />
          </div>
        </div>
        <div className="md:col-span-3">
          <LandingRightSideSection data={data} />
        </div>
      </div>
    </main>
  );
};

export default Home;
