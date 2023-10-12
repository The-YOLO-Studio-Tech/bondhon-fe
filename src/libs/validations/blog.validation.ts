import * as yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const BlogCategoryInfo = () =>
  yup.object().shape({
    title: yup.string().max(150).required('This field is required'),

    thumbnail: yup
      .mixed()
      .required('This field is required')
      .test('format', 'Not Image valide images.', (value: any) =>
        !value?.name && value?.includes('http')
          ? true
          : !value || (value && SUPPORTED_FORMATS.includes(value.type)),
      ),
  });

export const BlogSubCategoryInfo = () =>
  yup.object().shape({
    title: yup.string().max(150).required('This field is required'),
    thumbnail: yup
      .mixed()
      .required('This field is required')
      .test('format', 'Not Image valide images.', (value: any) =>
        !value?.name && value?.includes('http')
          ? true
          : !value || (value && SUPPORTED_FORMATS.includes(value.type)),
      ),
  });

export const BlogInfo = () =>
  yup.object().shape({
    title: yup.string().max(150).required('This field is required'),
    short_description: yup.string().max(250).required('This field is required'),
    status: yup.string().max(50).required('This field is required'),
    description_html: yup.string().required('This field is required'),
    thumbnail: yup
      .mixed()
      .required('This field is required')
      .test('format', 'Not Image valide images.', (value: any) =>
        !value?.name && value?.includes('http')
          ? true
          : !value || (value && SUPPORTED_FORMATS.includes(value.type)),
      ),
  });
