'use client';
import ImageUpload from '@/components/@assets/inputs/ImageUpload';
import TexEditor from '@/components/@assets/inputs/TexEditor';
import isNumberOrNull from '@/libs/utils/isNumberOrNull';
import { BlogInfo } from '@/libs/validations/blog.validation';
import { LoadingButton } from '@mui/lab';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { FC } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useGetCategoryData } from '@/hooks/querey/category.tsq';
import { useAddBlog, useUpdateBlog } from '@/hooks/querey/blog.tsq';

type Props = {
  instance?: any | null;
  setOpen?: any;
};

const BlogUploadForm: FC<Props> = ({ instance, setOpen }) => {
  const { data } = useGetCategoryData();
  const searchParams = useSearchParams();
  const { mutateAsync: addBlog } = useAddBlog();
  const { mutateAsync: editBlog } = useUpdateBlog(instance?.id);
  const { push } = useRouter();
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
      blogCategoryId: instance?.blogCategoryId || '',
      short_description: instance?.short_description || '',
      description_html: instance?.description_html || '',
      thumbnail: instance?.thumbnail_b64 || null,
      category: isNumberOrNull(searchParams.get('c_id')),
      sub_category: instance?.sub_category || isNumberOrNull(searchParams.get('sc_id')),
    },

    validationSchema: BlogInfo,
    onSubmit: async (data: any) => {
      try {
        const body = {
          title: data.title,
          blogCategoryId: data.blogCategoryId,
          thumbnail_b64: data.thumbnail,
          description_html: data.description_html,
          short_description: data.short_description,
          status: data.status,
        };

        // await mutateAsync(body);

        if (instance) {
          await editBlog(body);
          enqueueSnackbar('Edited', { variant: 'success' });
          setOpen(false);
        } else {
          await addBlog(body);
          resetForm();
          push('/dashboard/blog');
          enqueueSnackbar('Saved', { variant: 'success' });
        }
      } catch (err: any) {
        // console.log(err)
        enqueueSnackbar('Unexpected error please try again later', { variant: 'error' });
      }
    },
  });
  return (
    <div>
      <h3 className="text-2xl font-semibold pt-10 pb-5">নতুন ব্লগ</h3>
      <form onSubmit={handleSubmit} noValidate autoComplete="off" className="py-2 space-y-5">
        <TextField
          required
          fullWidth
          // size="small"
          value={values.title}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          name="title"
          onChange={handleChange}
          label="Title"
        />
        <FormControl fullWidth error={touched.blogCategoryId && Boolean(errors.blogCategoryId)}>
          <InputLabel>Category</InputLabel>
          <Select
            name="blogCategoryId"
            value={values.blogCategoryId}
            label="Category"
            onChange={handleChange}
          >
            {data &&
              data.map((i: any) => (
                <MenuItem key={i.id} value={i.id}>
                  {i.title}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>{touched.blogCategoryId && errors.blogCategoryId}</FormHelperText>
        </FormControl>
        <FormControl fullWidth error={touched.status && Boolean(errors.status)}>
          <InputLabel>Status</InputLabel>
          <Select name="status" value={values.status} label="Status" onChange={handleChange}>
            <MenuItem value={'publish'}>Publish</MenuItem>
            <MenuItem value={'archive'}>Archive</MenuItem>
          </Select>
          <FormHelperText>{touched.blogCategoryId && errors.blogCategoryId}</FormHelperText>
        </FormControl>
        <TextField
          required
          fullWidth
          name="short_description"
          value={values.short_description}
          error={touched.short_description && Boolean(errors.short_description)}
          helperText={touched.short_description && errors.short_description}
          onChange={handleChange}
          label="Short Description"
          multiline
          rows={4}
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
    </div>
  );
};

export default BlogUploadForm;
