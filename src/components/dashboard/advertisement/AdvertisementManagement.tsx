'use client';
import { enqueueSnackbar } from 'notistack';
import { CircularProgress, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import Image from 'next/legacy/image';
import DeleteModal from '@/components/@assets/modals/DeleteModal';
import { AiOutlinePlus } from 'react-icons/ai';
import ImageUpload from '@/components/@assets/inputs/ImageUpload';
import { convertDateFormat } from '@/libs/convertDateFormat';
import {
  useAddAdvertisement,
  useDeleteAdvertisement,
  useGetAdvertisementData,
  useUpdateAdvertisement,
} from '@/hooks/querey/useAdvertisementData';
import { AdvertisementInfo } from '@/libs/validations/advertisement.validation';

const COLUMN = ['অ্যাড', 'তারিখ', 'একশন'];

// type AdvertisementType = {
//   id: number;
//   add_banner: string;
//   created_at?: string | undefined;
// };
// mutateAsync
const UploadForm = ({
  instance,
  mutateAsync,
  setOpen,
}: {
  instance?: any | null;
  mutateAsync?: any;
  setOpen?: any;
}) => {
  const {
    // handleChange,
    // handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    // resetForm,
  } = useFormik({
    initialValues: {
      add_banner: instance?.base64 || '',
    },

    validationSchema: AdvertisementInfo,
    onSubmit: async (data: any) => {
      try {
        const body = {
          base64: data.add_banner,
        };

        await mutateAsync(body);
        // console.log(body);
        // if (!data?.add_banner?.name && data?.add_banner?.includes('http')) {
        //   let modifiedData = {
        //     add_banner: data?.add_banner,
        //   };
        //   await mutateAsync(modifiedData);
        // } else {
        //   let form_data = new FormData();

        //   for (let key in data) {
        //     form_data.append(key, data[key]);
        //   }

        //   await mutateAsync(form_data);
        // }
        setOpen(!open);
        instance
          ? enqueueSnackbar('Updated Successfully', { variant: 'success' })
          : enqueueSnackbar('Uploaded Successfully', { variant: 'success' });
        // resetForm();
      } catch (err: any) {
        // console.log(err);
        enqueueSnackbar('Unexpected error please try again later', { variant: 'error' });
      }
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className="py-2 space-y-5">
        <ImageUpload
          error={Boolean(errors.add_banner) && touched.add_banner && errors.add_banner}
          setValue={(x: any) => setFieldValue('add_banner', x)}
          value={values.add_banner}
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
  const { mutateAsync } = useAddAdvertisement();
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 px-3.5 py-2.5 text-[#392FA3] border border-[#392FA3] rounded-lg justify-center items-center gap-1.5 inline-flex"
      >
        <div className=" text-base font-normal  flex gap-1 items-center ">
          <AiOutlinePlus />
          <span className="inline-block">অ্যাডভারটাইসমেন্ট অ্যাড করুন</span>
        </div>
      </button>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle>আপলোড অ্যাড</DialogTitle>
        <DialogContent>
          <div className="space-y-4">
            <UploadForm mutateAsync={mutateAsync} setOpen={setOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const EditData = ({ instance }: { instance: any }) => {
  const { mutateAsync } = useUpdateAdvertisement(instance.id);
  const [open, setOpen] = useState(false);
  // const { data } = useGetSingleAdvertisementData(id, open);

  return (
    <>
      <span onClick={() => setOpen(!open)} className="text-[#392FA3] cursor-pointer">
        <FiEdit />
      </span>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle>এডিট অ্যাড</DialogTitle>
        <DialogContent>
          <div className="space-y-4">
            {instance && (
              <UploadForm mutateAsync={mutateAsync} setOpen={setOpen} instance={instance} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const DeleteData = ({ id }: { id: number }) => {
  const { mutateAsync, isLoading } = useDeleteAdvertisement(id);
  return (
    <div>
      <DeleteModal handleDelete={mutateAsync} isLoading={isLoading} />
    </div>
  );
};

// default component
const AdvertisementManagement = () => {
  const { data, isLoading } = useGetAdvertisementData();

  //
  return (
    <div>
      <h3 className="text-2xl font-semibold pt-10 pb-5">সকল অ্যাড</h3>
      <div className=" bg-white rounded-2xl p-10 border ">
        <div className="flex mb-4 pb-10 border-b border-black justify-between">
          <p className="text-2xl text-[#392FA3] font-semibold">অ্যাডভারটাইসমেন্ট ওভারভিউ</p>
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
                      className={`p-6 ${idx + 1 === COLUMN.length && 'text-right'} ${
                        idx + 1 === COLUMN.length - 1 && 'text-center'
                      }`}
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
                      <td className="px-6 py-4">
                        <span className="flex gap-2 items-center">
                          <span>
                            <Image
                              className="rounded-lg"
                              src={info.base64}
                              width={74}
                              height={74}
                              alt="add_banner"
                            />
                          </span>
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        {convertDateFormat(info.created_at)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="flex items-center justify-end gap-2">
                          <EditData instance={info} />
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

          {/* <div className="py-5 flex justify-end">
            <Pagination count={10} variant="outlined" color="primary" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdvertisementManagement;
