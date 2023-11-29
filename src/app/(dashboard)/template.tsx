// import AuthPage from '@/components/auth/AuthPage';
import AuthPage from '@/components/auth/AuthPage';
import DashboardAsidebar from '@/components/core/aside-bar/DashboardAsidebar';
import DashboardTopNavbar from '@/components/core/navbar/DashboardTopNavbar';

const Template = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthPage>
        <DashboardTopNavbar />

        <DashboardAsidebar />
        <div className="pl-4 pt-20 bg-[#F1F3F3] pr-4 lg:pr-8 lg:pl-[300px]">{children}</div>
      </AuthPage>
    </div>
  );
};

export default Template;
