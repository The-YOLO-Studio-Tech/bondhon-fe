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
