import DashboardAsidebar from '@/components/core/aside-bar/DashboardAsidebar';
import DashboardTopNavbar from '@/components/core/navbar/DashboardTopNavbar';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <DashboardTopNavbar />

        <DashboardAsidebar />
        <div className=" ml-2 mt-20 lg:ml-[275px]">{children}</div>
      </div>
    </div>
  );
};

export default Template;
