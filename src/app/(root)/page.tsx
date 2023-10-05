import CategorySection from '@/components/sections/landing/CategorySection';
import HeroSection from '@/components/sections/landing/HeroSection';

const Home = () => {
  return (
    <main className="commonContainer">
      <div className="md:grid md:grid-cols-12 md:gap-5 xl:gap-7">
        <div className="md:col-span-9">
          <HeroSection />
          <CategorySection />
        </div>
        <div className="md:col-span-3"></div>
      </div>
    </main>
  );
};

export default Home;
