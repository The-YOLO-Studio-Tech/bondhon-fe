import React from 'react';
import BlogAddPost from '../settings/@assets/BlogAddPost';

const BlogAddManagement = () => {
  return (
    <div className="mt-8 min-h-[calc(100vh-115px)]">
      <div>
        <h2 className="text-2xl mb-4 font-semibold text-[#392FA3]">ব্লগ পেইজ অ্যাডভারটাইসমেন্ট</h2>

        <div className="grid grid-cols-4 gap-5">
          <BlogAddPost addNum="1" />
          <BlogAddPost addNum="2" />
          <BlogAddPost addNum="3" />
          <BlogAddPost addNum="4" />
          <BlogAddPost addNum="5" />
        </div>
      </div>
      <div className="pb-10">
        <h2 className="text-2xl mt-10 mb-4 font-semibold text-[#392FA3]">
          ব্লগ ডিটেইলস অ্যাডভারটাইসমেন্ট
        </h2>
        <div>{/* <BlogAddPost addNum="blog_add6" /> */}</div>
        <div className="grid mt-4 grid-cols-4 gap-5">
          {/* <BlogAddPost addNum="blog_add7" /> */}
        </div>
      </div>
    </div>
  );
};

export default BlogAddManagement;
