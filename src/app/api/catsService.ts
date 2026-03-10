import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { addToFavorites, removeFromFavorites, setCats } from 'app/stores/actions'
import { AppDispatch } from 'app/stores/mainStore'
import { Cat } from 'app/stores/types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const queryClient = new QueryClient();

const CATS_API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

const fetchCats = async (): Promise<Cat[]> => {
  const response = await fetch(CATS_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch cats');
  }
  const data: Cat[] = await response.json();
  return data;
};

export const useFetchCats = () => {
  const dispatch = useDispatch();

  const query = useQuery<Cat[], Error>({
    queryKey: ['cats'],
    queryFn: () => fetchCats(),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (Array.isArray(query.data) && query.data.length > 0) {
      dispatch(setCats(query.data));
    }
  }, [dispatch, query.data]);

  return query;
};



export const useAddToFavorites = () => {
  const dispatch: AppDispatch = useDispatch();

  return useMutation<Cat, Error, Cat>({
    mutationFn: async (cat: Cat) => cat,
    onSuccess: (cat) => {
      dispatch(addToFavorites(cat));
      queryClient.invalidateQueries({ queryKey: ['cats'] });
    },
  });
};

export const useRemoveFromFavorites = () => {
  const dispatch: AppDispatch = useDispatch();

  return useMutation<string, Error, string>({
    mutationFn: async (catId: string) => catId,
    onSuccess: (catId) => {
      dispatch(removeFromFavorites(catId));
      queryClient.invalidateQueries({ queryKey: ['cats'] });
    },
  });
};
