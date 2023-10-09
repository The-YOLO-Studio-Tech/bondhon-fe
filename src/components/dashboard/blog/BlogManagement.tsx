'use client';
import ImageUpload from '@/components/@assets/inputs/ImageUpload';
import { BlogType, useAddBlog, useGetBlogData } from '@/hooks/querey/blog.tsq';
import { BlogInfo } from '@/libs/validations/blog.validation';
import { LoadingButton } from '@mui/lab';
import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import SendIcon from '@mui/icons-material/Send';

// import { useGetBlogData } from '@/hooks/querey/blog.tsq';
import React, { useState } from 'react';
import TexEditor from '@/components/@assets/inputs/TexEditor';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSearchParams } from 'next/navigation';
import isNumberOrNull from '@/libs/utils/isNumberOrNull';
import Image from 'next/legacy/image';

const COLUMN = ['পোস্ট', 'একশন'];

const UploadForm = ({
  instance,
  mutateAsync,
  setOpen,
}: {
  instance?: BlogType | null;
  mutateAsync: any;
  setOpen?: any;
}) => {
  const searchParams = useSearchParams();
  //   console.log(searchParams.get('c_id'));

  const {
    handleChange,
    // handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      title: instance?.title || '',
      status: instance?.status || 'publish',
      description_html: instance?.description_html || '',
      thumbnail: instance?.thumbnail || null,
      category: instance?.category || isNumberOrNull(searchParams.get('c_id')),
      sub_category: instance?.sub_category || isNumberOrNull(searchParams.get('sc_id')),
    },

    validationSchema: BlogInfo,
    onSubmit: async (data: any) => {
      try {
        if (!data?.thumbnail?.name && data?.thumbnail?.includes('http')) {
          let modifiedData = {
            title: data?.title,
            description_html: data?.description_html,
            status: data?.status,
            category: data?.category,
            sub_category: data?.sub_category,
          };

          await mutateAsync(modifiedData);
        } else {
          let form_data = new FormData();

          for (let key in data) {
            if (data[key]) {
              form_data.append(key, data[key]);
            }
          }

          await mutateAsync(form_data);
        }
        setOpen(!open);
        instance
          ? enqueueSnackbar('Updated Successfully', { variant: 'success' })
          : enqueueSnackbar('Uploaded Successfully', { variant: 'success' });
        resetForm();
      } catch (err: any) {
        for (let key of err.errors) {
          enqueueSnackbar(`${key?.detail}`, { variant: 'error' });
        }
      }
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className="py-2 space-y-5">
        <TextField
          required
          fullWidth
          size="small"
          value={values.title}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          name="title"
          onChange={handleChange}
          label="Title"
        />
        <TexEditor
          value={values.description_html}
          error={
            Boolean(errors.description_html) && touched.description_html && errors.description_html
          }
          setValue={(x: any) => setFieldValue('description_html', x)}
        />

        <ImageUpload
          error={Boolean(errors.thumbnail) && touched.thumbnail && errors.thumbnail}
          setValue={(x: any) => setFieldValue('thumbnail', x)}
          value={values.thumbnail}
        />
        <div className="flex items-center gap-3 justify-end">
          <LoadingButton
            endIcon={<SendIcon />}
            loading={isSubmitting}
            loadingPosition="end"
            type="submit"
            className="bg-[#4852AE] text-white px-7 py-[10px] capitalize mt-[50px]  ml-[22px] hover:bg-[#666cb3] disabled:text-white"
          >
            Publish Now
          </LoadingButton>
        </div>
      </form>
    </>
  );
};

const AddData = () => {
  const [open, setOpen] = useState(false);
  const { mutateAsync } = useAddBlog();
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-32 h-10 px-3.5 py-2.5 text-[#392FA3] border border-[#392FA3] rounded-lg justify-center items-center gap-1.5 inline-flex"
      >
        <div className=" text-base font-normal flex gap-1 items-center">
          <AiOutlinePlus />
          Add New
        </div>
      </button>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="md">
        <DialogTitle>Add New Our Values Data</DialogTitle>
        <DialogContent>
          <div className="space-y-4">
            <UploadForm mutateAsync={mutateAsync} setOpen={setOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const BlogManagement = () => {
  const { data } = useGetBlogData();
  const searchParams = useSearchParams();
  //   console.log(data);
  return (
    <div>
      <h3 className="text-2xl font-semibold pt-10 pb-5">সকল ব্লগ</h3>
      <div className=" bg-white rounded-2xl p-10 border ">
        <div className="flex mb-4 pb-10 border-b border-black justify-between">
          <p className="text-2xl text-[#392FA3] font-semibold">
            {searchParams.get('category__title')}
          </p>
          <AddData />
        </div>
      </div>
      {/* table */}
      <div className="tableContainer overflow-x-auto overflow-hidden">
        <div className="w-full relative tableContainer overflow-y-scroll max-h-[calc(100vh-200px)] min-h-[calc(100vh-200px)] lg:max-h-[calc(100vh-320px)] lg:min-h-[calc(100vh-320px)]">
          <table className="w-full text-left">
            <thead className="text-bbc-dash-d-4 sticky z-10 top-0 w-full h-fit text-bbc-dash-7 ">
              <tr>
                {COLUMN.map((item) => (
                  <th key={Math.random()} scope="col" className="p-6">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="h-1/2 w-full">
              {data &&
                data?.results?.map((info: BlogType) => (
                  <tr key={Math.random()} className="bg-white border-b text-bbc-dash-regular-2">
                    <td className="px-6 py-4">
                      <span className="flex gap-2 items-center">
                        <span>
                          <Image
                            className="rounded-lg"
                            src={info.thumbnail}
                            width={44}
                            height={44}
                            alt="thumbnail"
                          />
                        </span>
                        {info.title}
                      </span>
                    </td>

                    {/* <td className="px-6 py-4 text-bbc-dash-3 capitalize">{info.status}</td> */}
                    {/* <td className="px-6 py-4 ">{convertDateFormat(info.created_at)}</td> */}
                    <td className="px-6 py-4 ">
                      <span className="flex items-center gap-2">
                        {/* <EditData id={info.id} /> */}
                        <span className="text-bbc-dash-2 cursor-pointer">
                          {/* <DeleteData id={info.id} /> */}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManagement;
