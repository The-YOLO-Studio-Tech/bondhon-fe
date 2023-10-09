import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export type BlogType = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  category: number;
  sub_category: number;
  created_at?: string | undefined;
};

const REFEARCH_QUERY = ['contentBlogList'];

export const useGetBlogData = () => {
  /** session management */

  return useQuery({
    queryKey: [...REFEARCH_QUERY],
    queryFn: () =>
      axiousResuest({
        url: `/content/blog/`,
        method: 'get',
      }),
  });
};

export const useAddBlog = () => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();

  return useMutation(
    async (body: BlogType) =>
      await axiousResuest({
        url: `/content/blog/`,

        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(REFEARCH_QUERY),
    },
  );
};

export const useUpdateBlog = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body: BlogType) =>
      await axiousResuest({
        url: `/content/blog/${id}/`,

        method: 'patch',
        data: body,
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(REFEARCH_QUERY),
    },
  );
};

export const useDeleteBlog = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/content/blog/${id}/`,

        method: 'delete',
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(REFEARCH_QUERY),
    },
  );
};
