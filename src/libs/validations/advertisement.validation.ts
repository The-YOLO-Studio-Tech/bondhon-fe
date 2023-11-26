import * as yup from 'yup';
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

export const AdvertisementInfo = () =>
  yup.object().shape({
    add_banner: yup.string().required('This field is required'),
    // add_banner: yup
    //   .mixed()
    //   .required('This field is required')
    //   .test('format', 'Not Image valide images.', (value: any) =>
    //     !value?.name && value?.includes('http')
    //       ? true
    //       : !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    //   ),
  });
