import AdvertisementManagement from '@/components/dashboard/advertisement/AdvertisementManagement';
import LandingSettings from '@/components/dashboard/settings/LandingSettings';
import VideoManagement from '@/components/dashboard/video/VideoManagement';
import React from 'react';

export type Paramas = { params: { slug: string } };

const DashBoard = ({ params }: Paramas) => {
  return (
    <div>
      {params?.slug?.toString()?.replace(',', '/') === 'settings/home' && <LandingSettings />}
      {params?.slug?.toString()?.replace(',', '/') === 'video' && <VideoManagement />}
      {params?.slug?.toString()?.replace(',', '/') === 'advertisement' && (
        <AdvertisementManagement />
      )}
    </div>
  );
};

export default DashBoard;
