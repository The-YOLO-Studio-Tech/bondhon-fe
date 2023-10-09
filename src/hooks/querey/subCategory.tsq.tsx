import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export type SubCategoryType = {
  id: number;
  title: string;
  created_at?: string | undefined;
};
const REFEARCH_QUERY = ['contentCategoryList', 'contentSubCategoryList'];

export const useGetSubCategoryData = () => {
  /** session management */

  return useQuery({
    queryKey: [...REFEARCH_QUERY],
    queryFn: () =>
      axiousResuest({
        url: `/content/sub-category/`,
        method: 'get',
      }),
  });
};

export const useAddSubCategory = () => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();

  return useMutation(
    async (body: SubCategoryType) =>
      await axiousResuest({
        url: `/content/sub-category/`,

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

export const useUpdateSubCategory = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body: SubCategoryType) =>
      await axiousResuest({
        url: `/content/sub-category/${id}/`,

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

export const useDeleteSubCategory = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/content/sub-category/${id}/`,

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
