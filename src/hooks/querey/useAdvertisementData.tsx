import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

type AdvertisementType = {
  add_banner: string;
};

export const useGetAdvertisementData = () => {
  /** session management */

  return useQuery({
    queryKey: ['commercial-ad'],
    queryFn: () =>
      axiousResuest({
        url: `/api/advertisement`,
        method: 'get',
      }),
  });
};

export const useGetSingleAdvertisementData = (id: number, fire: boolean) => {
  /** session management */
  return useQuery({
    queryKey: ['single_commercial-ad', id],
    queryFn: () =>
      axiousResuest({
        url: `/content/commercial-ad/${id}/`,
        method: 'get',
      }),
    enabled: fire,
  });
};

export const useAddAdvertisement = () => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();

  return useMutation(
    async (body: AdvertisementType) =>
      await axiousResuest({
        url: `/api/advertisement`,

        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['commercial-ad']),
    },
  );
};

export const useUpdateAdvertisement = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();
  return useMutation(
    async (body: AdvertisementType) =>
      await axiousResuest({
        url: `/api/advertisement/${id}`,

        method: 'patch',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['commercial-ad']),
    },
  );
};

export const useDeleteAdvertisement = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */

  // const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/advertisement/${id}`,

        method: 'delete',
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['commercial-ad']),
    },
  );
};
