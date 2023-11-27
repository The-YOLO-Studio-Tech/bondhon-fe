'use client';
import { useDeleteBlog, useGetBlogData } from '@/hooks/querey/blog.tsq';
import { CircularProgress, Dialog, DialogContent, DialogTitle } from '@mui/material';

// import { useGetBlogData } from '@/hooks/querey/blog.tsq';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSearchParams } from 'next/navigation';
import Image from 'next/legacy/image';
import DeleteModal from '@/components/@assets/modals/DeleteModal';
import { FiEdit } from 'react-icons/fi';
import { convertDateFormat } from '@/libs/convertDateFormat';
import Link from 'next/link';
import BlogUploadForm from './BlogUploadForm';

const COLUMN = ['পোস্ট', 'স্ট্যাটাস', 'তারিখ', 'একশন'];

const EditData = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(!open)} className="text-[#392FA3] cursor-pointer">
        <FiEdit />
      </span>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>এডিট ব্লগ</DialogTitle>
        <DialogContent>
          <div className="space-y-4">
            {data && <BlogUploadForm setOpen={setOpen} instance={data} />}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const DeleteData = ({ id }: { id: number }) => {
  const { mutateAsync, isLoading } = useDeleteBlog(id);
  return (
    <div>
      <DeleteModal handleDelete={mutateAsync} isLoading={isLoading} />
    </div>
  );
};

const AddData = () => {
  return (
    <>
      <Link
        href={'/dashboard/blog/add'}
        className="w-32 h-10 px-3.5 py-2.5 text-[#392FA3] border border-[#392FA3] rounded-lg justify-center items-center gap-1.5 inline-flex"
      >
        <div className=" text-base font-normal flex gap-1 items-center">
          <AiOutlinePlus />
          Add New
        </div>
      </Link>
    </>
  );
};

const BlogManagement = () => {
  const { data, isLoading } = useGetBlogData();
  const searchParams = useSearchParams();

  return (
    <div>
      <h3 className="text-2xl font-semibold pt-10 pb-5">সকল ব্লগ</h3>
      <div className=" bg-white rounded-2xl p-10 border ">
        <div className="flex mb-4 pb-10 border-b border-black justify-between">
          <p className="text-2xl text-[#392FA3] font-semibold">
            {searchParams.get('category__title')}{' '}
            {searchParams.get('sub_category__title') &&
              `| ${searchParams.get('sub_category__title')}`}
          </p>
          <AddData />
        </div>

        {/* table */}
        <div className="tableContainer overflow-x-auto overflow-hidden">
          <div className="w-full relative tableContainer overflow-y-scroll max-h-[calc(100vh-200px)] min-h-[calc(100vh-200px)] lg:max-h-[calc(100vh-320px)] lg:min-h-[calc(100vh-320px)]">
            <table className="w-full text-left">
              <thead className="text-bbc-dash-d-4 bg-white sticky z-10 top-0 w-full h-fit text-bbc-dash-7 ">
                <tr>
                  {COLUMN.map((item, idx) => (
                    <th
                      key={Math.random()}
                      scope="col"
                      className={`p-6 ${idx + 1 === COLUMN.length && 'text-right'}`}
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="h-1/2 w-full">
                {data &&
                  data?.map((info: any) => (
                    <tr key={Math.random()} className="bg-white border-b text-bbc-dash-regular-2">
                      <td className="px-6 py-4 w-1/2">
                        <span className="flex gap-2 items-center ">
                          <span className="min-w-[44px]">
                            <Image
                              className="rounded-lg"
                              src={info.thumbnail_b64}
                              width={44}
                              height={44}
                              alt="thumbnail"
                            />
                          </span>
                          {info.title}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-bbc-dash-3 capitalize">{info.status}</td>
                      <td className="px-6 py-4 ">{convertDateFormat(info.createdAt)}</td>
                      <td className="px-6 py-4 ">
                        <span className="flex justify-end items-center gap-2">
                          <EditData data={info} />
                          <span className="text-bbc-dash-2 cursor-pointer">
                            <DeleteData id={info.id} />
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {isLoading && (
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 -translate-x-1/2 justify-center items-center">
                <CircularProgress />
              </div>
            )}
            {data?.length === 0 && (
              <div className="absolute text text-bbc-dash-d-2 top-1/2 -translate-y-1/2 right-1/2 -translate-x-1/2 justify-center items-center">
                No Data Available!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManagement;
