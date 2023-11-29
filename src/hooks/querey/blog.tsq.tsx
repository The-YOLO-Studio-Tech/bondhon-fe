import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { useSession } from 'next-auth/react';
import { usePathname, useSearchParams } from 'next/navigation';

export type BlogType = {
  id: number;
  title: string;
  thumbnail: string;
  description_html: string;
  short_description?: string | undefined;
  status: string;
  category: number;
  sub_category: number;
  created_at?: string | undefined;
};

const REFEARCH_QUERY = ['contentBlogList'];

export const useGetBlogData = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const title = pathname.includes('/post/') ? pathname.replace('/post/', '') || '' : '';
  const menu = searchParams.get('menu') || '';
  const c_id = searchParams.get('c_id') || '';

  return useQuery({
    queryKey: [...REFEARCH_QUERY, ...[menu, c_id, title]],
    queryFn: () =>
      axiousResuest({
        url: `/api/blog?menu=${decodeURIComponent(menu)}&c_id=${c_id}`,
        method: 'get',
      }),
  });
};

export const useGetSingleBlogData = (slug: string) => {
  /** session management */
  return useQuery({
    queryKey: ['single_blog', slug],
    queryFn: () =>
      axiousResuest({
        url: `/api/blog?slug=${slug}`,
        method: 'get',
      }),
  });
};

export const useAddBlog = () => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();

  return useMutation(
    async (body: BlogType) =>
      await axiousResuest({
        url: `/api/blog`,

        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
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

  // const { data: session } = useSession();
  return useMutation(
    async (body: BlogType) =>
      await axiousResuest({
        url: `/api/blog/${id}/`,

        method: 'patch',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session.accessToken}`,
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
  // const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/blog/${id}/`,

        method: 'delete',
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(REFEARCH_QUERY),
    },
  );
};
