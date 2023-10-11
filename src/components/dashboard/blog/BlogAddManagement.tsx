import React from 'react'
import BlogAddPost from '../settings/@assets/BlogAddPost'

const BlogAddManagement = () => {
  return (
    <div className='mt-8 min-h-[calc(100vh-115px)]'>
        <div>
            <h2 className='text-2xl mb-4 font-semibold text-[#392FA3]'>ব্লগ পেইজ অ্যাডভারটাইসমেন্ট</h2>

            <div className='grid grid-cols-4 gap-5'>
                <BlogAddPost addNum='blog_add1'/>
                <BlogAddPost addNum='blog_add2'/>
                <BlogAddPost addNum='blog_add3'/>
                <BlogAddPost addNum='blog_add4'/>
            </div>

        </div>
        <div className='pb-10'>
            <h2 className='text-2xl mt-10 mb-4 font-semibold text-[#392FA3]'>ব্লগ ডিটেইলস অ্যাডভারটাইসমেন্ট</h2>

            <div className='grid grid-cols-4 gap-5'>
                <BlogAddPost addNum='blog_add5'/>
            </div>

        </div>
    </div>
  )
}

export default BlogAddManagement