import { Category } from '../types';
import http from '@utils/http';
import { useQuery } from 'react-query';

export const fetchCategories = async ({ queryKey }: any) => {
  console.log('fetchCategories');

  const [_key, _params] = queryKey;
  const { data } = await http.get('categoryList');
  return { categories: data as Category[] };
};
export const useCategoriesQuery = () => {
  return useQuery<{ categories: Category[] }, Error>(
    ['categoryList'],
    fetchCategories
  );
};
