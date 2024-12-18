import { useInfiniteQuery } from '@tanstack/vue-query';
import { fetchMockData } from '@/mock-api';

export const useInfiniteData = () => {
  return useInfiniteQuery({
    queryKey: ['items'],
    queryFn: ({ pageParam = 0 }) => fetchMockData(pageParam, 50),
    getNextPageParam: (_, pages) => pages.length,
  });
};
