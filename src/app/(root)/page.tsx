import AddCard from '@/components/core/cart/AddCard';
import CategorySection from '@/components/sections/landing/CategorySection';
import HeroSection from '@/components/sections/landing/HeroSection';
import LandingRightSideSection from '@/components/sections/landing/LandingRightSideSection';

const Home = () => {
  return (
    <main className="commonContainer pt-8 md:pt-12 ">
      <div className="md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="md:col-span-9">
          <HeroSection />
          <div className="mt-8 xl:mt-[60px]">
            <AddCard width={947} height={257} />
          </div>
          <CategorySection />
        </div>
        <div className="md:col-span-3">
          <LandingRightSideSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
