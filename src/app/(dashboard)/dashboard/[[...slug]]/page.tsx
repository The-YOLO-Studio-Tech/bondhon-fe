import AdvertisementManagement from '@/components/dashboard/advertisement/AdvertisementManagement';
import AddNewCategory from '@/components/dashboard/blog/AddNewCategory';

import { AddNewSubcategory } from '@/components/dashboard/blog/SubcategoryManagement';
import LandingSettings from '@/components/dashboard/settings/LandingSettings';
import VideoManagement from '@/components/dashboard/video/VideoManagement';
import React from 'react';

// Regular expression pattern
// const blogPattern = /^blog,\d+$/;
const addSubCatPattern = /^blog,(\d+),sub,add$/;

export type Paramas = { params: { slug: string } };

const DashBoard = ({ params }: Paramas) => {
  // console.log(params?.slug?.toString());

  return (
    <div>
      {params?.slug?.toString()?.replace(',', '/') === 'settings/home' && <LandingSettings />}
      {params?.slug?.toString()?.replace(',', '/') === 'video' && <VideoManagement />}
      {params?.slug?.toString()?.replace(',', '/') === 'advertisement' && (
        <AdvertisementManagement />
      )}
      {/* blog */}
      {params?.slug?.toString() === 'blog,catagory,add' && <AddNewCategory />}
      {/* {blogPattern.test(params?.slug?.toString()) && <CategoryManagement />} */}
      {addSubCatPattern.test(params?.slug?.toString()) && <AddNewSubcategory />}
    </div>
  );
};

export default DashBoard;
