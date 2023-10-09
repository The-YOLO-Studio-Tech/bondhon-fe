'use client';
import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import ImageUpload from '@/components/@assets/inputs/ImageUpload';
import { useAddCategory } from '@/hooks/querey/category.tsq';
import { BlogCategoryInfo } from '@/libs/validations/blog.validation';

type CategoryType = {
  id: number;
  title: string;
  thumbnail: string;
  created_at?: string | undefined;
};

const UploadForm = ({
  instance,
  mutateAsync,
}: {
  instance?: CategoryType | null;
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
      thumbnail: instance?.thumbnail || '',
    },

    validationSchema: BlogCategoryInfo,
    onSubmit: async (data: any) => {
      try {
        if (!data?.thumbnail?.name && data?.thumbnail?.includes('http')) {
          let modifiedData = {
            title: data?.title,
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
        resetForm();
        instance
          ? enqueueSnackbar('Updated Successfully', { variant: 'success' })
          : enqueueSnackbar('Uploaded Successfully', { variant: 'success' });
      } catch (err: any) {
        for (let key of err.errors) {
          enqueueSnackbar(`${key?.detail}`, { variant: 'error' });
        }
      }
    },
  });

  return (
    <>
      <p className="cursor-pointer" onClick={() => setOpen(!open)}>
        অ্যাড ক্যাটাগরি
      </p>
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
