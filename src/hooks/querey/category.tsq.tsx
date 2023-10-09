import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { SubCategoryType } from './subCategory.tsq';

export type CategoryType = {
  id: number;
  title: string;
  thumbnail: string;
  created_at?: string | undefined;
  sub_category?: SubCategoryType[];
};

const REFEARCH_QUERY = ['contentCategoryList'];

export const useGetCategoryData = () => {
  /** session management */

  return useQuery({
    queryKey: ['contentCategoryList'],
    queryFn: () =>
      axiousResuest({
        url: `/content/category/`,
        method: 'get',
      }),
  });
};

export const useAddCategory = () => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();

  return useMutation(
    async (body: CategoryType) =>
      await axiousResuest({
        url: `/content/category/`,

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

export const useUpdateCategory = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body: CategoryType) =>
      await axiousResuest({
        url: `/content/category/${id}/`,

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

export const useDeleteCategory = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/content/category/${id}/`,

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
