import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export type BlogType = {
  id: number;
  title: string;
  thumbnail: string;
  description_html: string;
  status: string;
  category: number;
  sub_category: number;
  created_at?: string | undefined;
};

const REFEARCH_QUERY = ['contentBlogList'];

export const useGetBlogData = () => {
  const searchParams = useSearchParams();
  const category__title = searchParams.get('category__title') || '';
  const sub_category__title = searchParams.get('sub_category__title') || '';

  return useQuery({
    queryKey: [...REFEARCH_QUERY, ...[category__title, sub_category__title]],
    queryFn: () =>
      axiousResuest({
        url: `/content/blog/?category__title=${category__title}&sub_category__title=${sub_category__title}`,
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
