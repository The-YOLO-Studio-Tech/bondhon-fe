import axiousResuest from '@/libs/axiosRequest';
import { useQuery } from '@tanstack/react-query';
export const useBlogCategoryData = () => {
  /** session management */
  return useQuery({
    queryKey: ['unique'],
    queryFn: () =>
      axiousResuest({
        url: `/content/category/`,
        method: 'get',
      }),
  });
};
