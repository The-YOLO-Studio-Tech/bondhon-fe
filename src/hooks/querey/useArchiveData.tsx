import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

type ArchiveType = {
  title: string;
  url: string;
  thumbnail: string;
  publish_year: string
};

export const useGetArchiveData = () => {
  /** session management */

  return useQuery({
    queryKey: ['e-magazine'],
    queryFn: () =>
      axiousResuest({
        url: `/content/e-magazine/`,
        method: 'get',
      }),
  });
};

export const useGetSingleArchiveData = (id: number, fire: boolean) => {
  /** session management */
  return useQuery({
    queryKey: ['single_e-magazine', id],
    queryFn: () =>
      axiousResuest({
        url: `/content/e-magazine/${id}/`,
        method: 'get',
      }),
    enabled: fire,
  });
};

export const useAddArchive = () => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();

  return useMutation(
    async (body: ArchiveType) =>
      await axiousResuest({
        url: `/content/e-magazine/`,

        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['e-magazine']),
    },
  );
};

export const useUpdateArchive = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body: ArchiveType) =>
      await axiousResuest({
        url: `/content/e-magazine/${id}/`,

        method: 'patch',
        data: body,
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['e-magazine']),
    },
  );
};

export const useDeleteArchive = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/content/e-magazine/${id}/`,

        method: 'delete',
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['e-magazine']),
    },
  );
};
