import axiousResuest from '@/libs/axiosRequest';
import { HomePageCoontentType } from '@/models/HomePageCoontentType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetBlogAdd = () => {
  /** session management */

  return useQuery({
    queryKey: ['contentPageContentList'],
    queryFn: () =>
      axiousResuest({
        url: `/api/advertisement/blog`,
        method: 'get',
      }),
  });
};

export const useUploadBlogAdd = () => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();

  return useMutation(
    async (body: HomePageCoontentType) =>
      await axiousResuest({
        url: `/api/advertisement/blog`,
        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['contentPageContentList']),
    },
  );
};

export const useGetSingleBlogAdd = () => {
  /** session management */

  return useQuery({
    queryKey: ['GetSingleBlogAdd'],
    queryFn: () =>
      axiousResuest({
        url: `/api/advertisement/blog/single`,
        method: 'get',
      }),
  });
};

export const useUploadBlogDetailsAdd = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (body: HomePageCoontentType) =>
      await axiousResuest({
        url: `/api/advertisement/blog/single`,
        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['GetSingleBlogAdd']),
    },
  );
};

/////// landing page add
export const useGetLandingAdd = () => {
  /** session management */

  return useQuery({
    queryKey: ['landing_add'],
    queryFn: () =>
      axiousResuest({
        url: `/api/advertisement/landing`,
        method: 'get',
      }),
  });
};
export const useUploadLandingAdd = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (body: HomePageCoontentType) =>
      await axiousResuest({
        url: `/api/advertisement/landing`,
        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['landing_add']),
    },
  );
};

// Blog Feature
export const useGetLandingBlog = () => {
  /** session management */

  return useQuery({
    queryKey: ['LandingBlog'],
    queryFn: () =>
      axiousResuest({
        url: `/api/blog/feature`,
        method: 'get',
      }),
  });
};

export const useLandingBlog = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (body: HomePageCoontentType) =>
      await axiousResuest({
        url: `/api/blog/feature`,
        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['LandingBlog']),
    },
  );
};

// category

export const useGetLandingPageCategory = () => {
  /** session management */

  return useQuery({
    queryKey: ['LandingPageCategory'],
    queryFn: () =>
      axiousResuest({
        url: `/api/blog/category/feature`,
        method: 'get',
      }),
  });
};

export const useUploadLandingPageCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (body: HomePageCoontentType) =>
      await axiousResuest({
        url: `/api/blog/category/feature`,
        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['LandingPageCategory']),
    },
  );
};

// video
export const useGetLandingPagevideo = () => {
  /** session management */

  return useQuery({
    queryKey: ['LandingPagevideo'],
    queryFn: () =>
      axiousResuest({
        url: `/api/video/feature`,
        method: 'get',
      }),
  });
};

export const useUploadLandingPagevideo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (body: any) =>
      await axiousResuest({
        url: `/api/video/feature`,
        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['LandingPagevideo']),
    },
  );
};
