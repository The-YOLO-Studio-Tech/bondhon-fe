import axiousResuest from '@/libs/axiosRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export type VideoType = {
  id?: string | number;
  title: string;
  url: string;
  thumbnail: string;
};

export const useGetVideoData = () => {
  /** session management */

  return useQuery({
    queryKey: ['video'],
    queryFn: () =>
      axiousResuest({
        url: `/api/video`,
        method: 'get',
      }),
  });
};

export const useGetSingleVideoData = (id: number, fire: boolean) => {
  /** session management */
  return useQuery({
    queryKey: ['single_video', id],
    queryFn: () =>
      axiousResuest({
        url: `/content/video/${id}/`,
        method: 'get',
      }),
    enabled: fire,
  });
};

export const useAddVideo = () => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();

  return useMutation(
    async (body: VideoType) =>
      await axiousResuest({
        url: `/api/video`,

        method: 'post',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session?.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['video']),
    },
  );
};

export const useUpdateVideo = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();
  return useMutation(
    async (body: VideoType) =>
      await axiousResuest({
        url: `/api/video/${id}`,

        method: 'patch',
        data: body,
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['video']),
    },
  );
};

export const useDeleteVideo = (id: number) => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/video/${id}`,

        method: 'delete',
        headers: {
          // @ts-ignore
          // Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['video']),
    },
  );
};
