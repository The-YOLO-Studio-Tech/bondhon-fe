import AdvertisementManagement from '@/components/dashboard/advertisement/AdvertisementManagement';
import ArchiveManagement from '@/components/dashboard/archive/ArchiveManagement';
import BlogAddManagement from '@/components/dashboard/blog/BlogAddManagement';
import BlogManagement from '@/components/dashboard/blog/BlogManagement';

import LandingSettings from '@/components/dashboard/settings/LandingSettings';
import VideoManagement from '@/components/dashboard/video/VideoManagement';
import React from 'react';

// Regular expression pattern
// const blogPattern = /^blog,\d+$/;
// const addSubCatPattern = /^blog,(\d+),sub,add$/;

export type Paramas = { params: { slug: string } };

const DashBoard = ({ params }: Paramas) => {
  return (
    <div>
      {!params.slug && <LandingSettings />}
      {params?.slug?.toString()?.replace(',', '/') === 'video' && <VideoManagement />}
      {params?.slug?.toString()?.replace(',', '/') === 'advertisement' && (
        <AdvertisementManagement />
      )}
      {params?.slug?.toString()?.replace(',', '/') === 'archive' && <ArchiveManagement />}
      {/* blog */}
      {params?.slug?.includes('blog') && params.slug?.length === 1 && <BlogManagement />}
      {params?.slug?.[0] == 'settings' && params?.slug?.[1] == 'blog' && <BlogAddManagement />}
    </div>
  );
};

export default DashBoard;
