'use client';
import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import ImageUpload from '@/components/@assets/inputs/ImageUpload';
import { useAddCategory, useDeleteCategory, useUpdateCategory } from '@/hooks/querey/category.tsq';
import { BlogCategoryInfo } from '@/libs/validations/blog.validation';
import { BiEdit } from 'react-icons/bi';
import DeleteModal from '@/components/@assets/modals/DeleteModal';
// import { blogCategorycreate } from '@/actions/blog.action';

// type CategoryType = {
//   id: number;
//   title: string;
//   thumbnail: string;
//   created_at?: string | undefined;
// };

export const UploadForm = ({
  instance,
  mutateAsync,
}: {
  instance?: any | null;
  mutateAsync: any;
  setOpen?: any;
}) => {
  const [open, setOpen] = useState(false);
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
      thumbnail: instance?.thumbnail_b64 || '',
    },

    validationSchema: BlogCategoryInfo,
    onSubmit: async (data: any) => {
      try {
        const body = {
          title: data.title,
          thumbnail_b64: data.thumbnail,
        };

        await mutateAsync(body);
        if (instance) {
        } else {
          resetForm();
        }
        enqueueSnackbar('Saved', { variant: 'success' });
        setOpen(!open);
      } catch (err: any) {
        enqueueSnackbar('Unexpected error please try again later', { variant: 'error' });
      }
    },
  });

  return (
    <>
      {instance ? (
        <BiEdit onClick={() => setOpen(!open)} size={15} className="texre cursor-pointer" />
      ) : (
        <p className="cursor-pointer" onClick={() => setOpen(!open)}>
          অ্যাড ক্যাটাগরি
        </p>
      )}
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle>অ্যাড ক্যাটাগরি</DialogTitle>
        <DialogContent>
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
        </DialogContent>
      </Dialog>
    </>
  );
};

export const AddCategoryModal = () => {
  const { mutateAsync } = useAddCategory();
  return (
    <div>
      <UploadForm mutateAsync={mutateAsync} />
    </div>
  );
};

export const UpdateCategoryModal = ({ id, instance }: { id: number; instance: any }) => {
  const { mutateAsync } = useUpdateCategory(id);
  return (
    <div>
      <UploadForm mutateAsync={mutateAsync} instance={instance} />
    </div>
  );
};

export const DeleteCategory = ({ id }: { id: number }) => {
  const { mutateAsync, isLoading } = useDeleteCategory(id);
  return (
    <div>
      <DeleteModal handleDelete={mutateAsync} isLoading={isLoading} />
    </div>
  );
};
