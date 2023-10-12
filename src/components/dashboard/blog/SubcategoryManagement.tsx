'use client';
import {
  SubCategoryType,
  useAddSubCategory,
  useDeleteSubCategory,
  useUpdateSubCategory,
} from '@/hooks/querey/subCategory.tsq';
import { BlogSubCategoryInfo } from '@/libs/validations/blog.validation';
import { LoadingButton } from '@mui/lab';
import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteModal from '@/components/@assets/modals/DeleteModal';
import { BiEdit } from 'react-icons/bi';
import ImageUpload from '@/components/@assets/inputs/ImageUpload';

const UploadForm = ({
  instance,
  category,
  mutateAsync,
}: {
  instance?: SubCategoryType | null;
  mutateAsync: any;
  category: number;
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
      category: category,
    },

    validationSchema: BlogSubCategoryInfo,
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
      {instance ? (
        <BiEdit onClick={() => setOpen(!open)} size={15} className="texre cursor-pointer" />
      ) : (
        <p className="cursor-pointer" onClick={() => setOpen(!open)}>
          অ্যাড সাব-ক্যাটাগরি
        </p>
      )}
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle>অ্যাড সাব-ক্যাটাগরি</DialogTitle>
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

export const AddNewSubcategory = ({ category_id }: { category_id: number }) => {
  const { mutateAsync } = useAddSubCategory();
  return (
    <div>
      <UploadForm mutateAsync={mutateAsync} category={category_id} />
    </div>
  );
};
// অ্যাড সাব-ক্যাটাগরি {category_id}

export const UpdateSubCategoryModal = ({
  id,
  instance,
  category_id,
}: {
  id: number;
  instance: any;
  category_id: number;
}) => {
  const { mutateAsync } = useUpdateSubCategory(id);
  return (
    <div>
      <UploadForm mutateAsync={mutateAsync} category={category_id} instance={instance} />
    </div>
  );
};

export const DeleteSubCategory = ({ id }: { id: number }) => {
  const { mutateAsync, isLoading } = useDeleteSubCategory(id);
  return (
    <div>
      <DeleteModal handleDelete={mutateAsync} isLoading={isLoading} />
    </div>
  );
};
