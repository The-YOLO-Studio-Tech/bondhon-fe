import DefaultFooter from '@/components/core/footer/DefaultFooter';
import DefaultNavbar from '@/components/core/navbar/DefaultNavbar';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DefaultNavbar />
      {children}

      <DefaultFooter />
    </div>
  );
};

export default Template;
