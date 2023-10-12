import axiousResuest from '@/libs/axiosRequest';
import { useQuery } from '@tanstack/react-query';
export const useBlogCategoryData = (limt: number, offset: number) => {
  /** session management */
  return useQuery({
    queryKey: ['unique'],
    queryFn: () =>
      axiousResuest({
        url: `/content/category/?limit=${limt}&offset${offset}`,
        method: 'get',
      }),
  });
};
