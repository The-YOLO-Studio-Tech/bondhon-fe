import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { usePathname, useSearchParams } from 'next/navigation';

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

export const useGetBlogData = (limit = 50, offset = 0, c_title = '', s_title = '') => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const title = pathname.includes('/post/') ? pathname.replace('/post/', '') || '' : '';
  const category__title = searchParams.get('category__title') || c_title;
  const sub_category__title = searchParams.get('sub_category__title') || s_title;

  return useQuery({
    queryKey: [...REFEARCH_QUERY, ...[category__title, sub_category__title]],
    queryFn: () =>
      axiousResuest({
        url: `/content/blog/?limit=${limit}&offset=${offset}&category__title=${category__title}&sub_category__title=${sub_category__title}&title=${title}`,
        method: 'get',
      }),
  });
};

export const useGetSingleBlogData = (id: number, fire: boolean) => {
  /** session management */
  return useQuery({
    queryKey: ['single_blog', id],
    queryFn: () =>
      axiousResuest({
        url: `/content/blog/${id}/`,
        method: 'get',
      }),
    enabled: fire,
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
