import AuthPage from '@/components/auth/AuthPage';
import DashboardAsidebar from '@/components/core/aside-bar/DashboardAsidebar';
import DashboardTopNavbar from '@/components/core/navbar/DashboardTopNavbar';

const Template = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthPage>
        <DashboardTopNavbar />

        <DashboardAsidebar />
        <div className=" ml-2 mt-20 lg:ml-[275px]">{children}</div>
      </AuthPage>
    </div>
  );
};

export default Template;
