import * as yup from 'yup';
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const ArchiveInfo = () =>
  yup.object().shape({
    title: yup.string().max(150).required('This field is required'),
    publish_year: yup.date().required('This field is required'),
    url: yup.string().required('This field is required'),
    thumbnail: yup.string().required('This field is required'),
    // thumbnail: yup
    //   .mixed()
    //   .required('This field is required')
    //   .test('format', 'Not Image valide images.', (value: any) =>
    //     !value?.name && value?.includes('http')
    //       ? true
    //       : !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    //   ),
  });
