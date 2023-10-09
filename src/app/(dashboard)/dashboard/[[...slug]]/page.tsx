import AdvertisementManagement from '@/components/dashboard/advertisement/AdvertisementManagement';
import BlogManagement from '@/components/dashboard/blog/BlogManagement';

import LandingSettings from '@/components/dashboard/settings/LandingSettings';
import VideoManagement from '@/components/dashboard/video/VideoManagement';
import React from 'react';

// Regular expression pattern
// const blogPattern = /^blog,\d+$/;
// const addSubCatPattern = /^blog,(\d+),sub,add$/;

export type Paramas = { params: { slug: string } };

const DashBoard = ({ params }: Paramas) => {
  // console.log(params.)
  return (
    <div>
      {params?.slug?.toString()?.replace(',', '/') === 'settings/home' && <LandingSettings />}
      {params?.slug?.toString()?.replace(',', '/') === 'video' && <VideoManagement />}
      {params?.slug?.toString()?.replace(',', '/') === 'advertisement' && (
        <AdvertisementManagement />
      )}
      {/* blog */}
      {params?.slug?.includes('blog') && <BlogManagement />}
    </div>
  );
};

export default DashBoard;
