import * as yup from 'yup';
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
const youtubeUrlPattern =
  /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]+(&\S*)?|youtu\.be\/[\w-]+$/;

export const VideoInfo = () =>
  yup.object().shape({
    title: yup.string().max(150).required('This field is required'),
    url: yup
      .string()
      .matches(youtubeUrlPattern, 'Enter Correct YouTube Url Pattern')
      .max(150)
      .required('This field is required'),
    thumbnail: yup.string().required('This field is required'),
  });
