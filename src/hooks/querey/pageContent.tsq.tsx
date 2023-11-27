import axiousResuest from '@/libs/axiosRequest';
import { HomePageCoontentType } from '@/models/HomePageCoontentType';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetPageContent = (home: string) => {
  /** session management */

  return useQuery({
    queryKey: ['contentPageContentList'],
    queryFn: () =>
      axiousResuest({
        url: `/content/page-content/?home=${home}`,
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
