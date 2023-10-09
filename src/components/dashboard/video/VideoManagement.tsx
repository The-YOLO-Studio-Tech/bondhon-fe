'use client';
import { enqueueSnackbar } from 'notistack';
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Pagination,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import Image from 'next/legacy/image';
import DeleteModal from '@/components/@assets/modals/DeleteModal';
import { AiOutlinePlus } from 'react-icons/ai';
import { VideoInfo } from '@/libs/validations/video.validation';
import ImageUpload from '@/components/@assets/inputs/ImageUpload';
import { convertDateFormat } from '@/libs/convertDateFormat';
import {
  useAddVideo,
  useDeleteVideo,
  useGetSingleVideoData,
  useGetVideoData,
  useUpdateVideo,
} from '@/hooks/querey/useVideoData';

const COLUMN = ['পোস্ট', 'লিংক', 'ডেট', 'একশন'];

type WeUniqueType = {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  created_at?: string | undefined;
};
// mutateAsync
const UploadForm = ({
  instance,
  mutateAsync,
  setOpen,
}: {
  instance?: WeUniqueType | null;
  mutateAsync?: any;
  setOpen?: any;
}) => {
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
      url: instance?.url || '',
      thumbnail: instance?.thumbnail || '',
    },

    validationSchema: VideoInfo,
    onSubmit: async (data: any) => {
      try {
        if (!data?.thumbnail?.name && data?.thumbnail?.includes('http')) {
          let modifiedData = {
            title: data?.title,
            url: data?.url,
          };
          await mutateAsync(modifiedData);
        } else {
          let form_data = new FormData();

          for (let key in data) {
            form_data.append(key, data[key]);
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
        <TextField
          required
          fullWidth
          name="url"
          value={values.url}
          error={touched.url && Boolean(errors.url)}
          helperText={touched.url && errors.url}
          onChange={handleChange}
          label="Video Url"
          multiline
          rows={4}
        />

        <ImageUpload
          error={Boolean(errors.thumbnail) && touched.thumbnail && errors.thumbnail}
          setValue={(x: any) => setFieldValue('thumbnail', x)}
          value={values.thumbnail}
        />
        <div className="flex items-center gap-3 justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#392FA3] text-white px-4 rounded-xl py-[10px] capitalize  hover:bg-[#6e63e2] transition-all disabled:bg-slate-400 disabled:text-white"
          >
            {isSubmitting ? 'saving...' : 'Publish Now'}
          </button>
        </div>
      </form>
    </>
  );
};

const AddData = () => {
  const [open, setOpen] = useState(false);
  const { mutateAsync } = useAddVideo();
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 px-3.5 py-2.5 text-[#392FA3] border border-[#392FA3] rounded-lg justify-center items-center gap-1.5 inline-flex"
      >
        <div className=" text-base font-normal flex gap-1 items-center">
          <AiOutlinePlus />
          ভিডিও অ্যাড করুন
        </div>
      </button>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle>আপলোড ভিডিও</DialogTitle>
        <DialogContent>
          <div className="space-y-4">
            <UploadForm mutateAsync={mutateAsync} setOpen={setOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const EditData = ({ id }: { id: number }) => {
  const { mutateAsync } = useUpdateVideo(id);
  const [open, setOpen] = useState(false);
  const { data } = useGetSingleVideoData(id, open);

  return (
    <>
      <span onClick={() => setOpen(!open)} className="text-[#392FA3] cursor-pointer">
        <FiEdit />
      </span>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle>এডিট ভিডিও</DialogTitle>
        <DialogContent>
          <div className="space-y-4">
            {data && <UploadForm mutateAsync={mutateAsync} setOpen={setOpen} instance={data} />}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const DeleteData = ({ id }: { id: number }) => {
  const { mutateAsync, isLoading } = useDeleteVideo(id);
  return (
    <div>
      <DeleteModal handleDelete={mutateAsync} isLoading={isLoading} />
    </div>
  );
};

// default component
const VideoManagement = () => {
  const { data, isLoading } = useGetVideoData();
  //
  return (
    <div>
      <h3 className="text-2xl font-semibold pt-10 pb-5">সকল ভিডিও</h3>
      <div className=" bg-white rounded-2xl p-10 border ">
        <div className="flex mb-4 pb-10 border-b border-black justify-between">
          <p className="text-2xl text-[#392FA3] font-semibold">ভিডিও ওভারভিউ</p>
          <AddData />
        </div>

        {/* table */}
        <div className="tableContainer overflow-x-auto overflow-hidden">
          <div className="w-full relative tableContainer overflow-y-scroll max-h-[calc(100vh-200px)] min-h-[calc(100vh-200px)] lg:max-h-[calc(100vh-320px)] lg:min-h-[calc(100vh-320px)]">
            <table className="w-full text-left">
              <thead className="text-bbc-dash-d-4 bg-white sticky z-10 top-0 w-full h-fit text-bbc-dash-7 ">
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
                  data?.results?.map((info: WeUniqueType) => (
                    <tr key={Math.random()} className="bg-white border-b text-bbc-dash-regular-2">
                      <td className="px-6 py-4">
                        <span className="flex gap-2 items-center">
                          <span>
                            <Image
                              className="rounded-lg"
                              src={info.thumbnail}
                              width={74}
                              height={74}
                              alt="thumbnail"
                            />
                          </span>
                          {info.title}
                        </span>
                      </td>
                      <td className="px-6 py-4">{info.url}</td>
                      {/* <td className="px-6 py-4 text-bbc-dash-3 capitalize">{info.status}</td> */}
                      <td className="px-6 py-4 ">{convertDateFormat(info.created_at)}</td>
                      <td className="px-6 py-4 ">
                        <span className="flex items-center gap-2">
                          <EditData id={info.id} />
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
            {data?.results?.length === 0 && (
              <div className="absolute text text-bbc-dash-d-2 top-1/2 -translate-y-1/2 right-1/2 -translate-x-1/2 justify-center items-center">
                No Data Available!
              </div>
            )}
          </div>

          <div className="py-5 flex justify-end">
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoManagement;
