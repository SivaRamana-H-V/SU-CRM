import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useFetch = (queryKey, fetchFn, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: fetchFn,
    ...options,
  });
};

export const usePost = (mutationFn, options = {}) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};

export const useUpdate = (mutationFn, options = {}) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};

export const useDelete = (mutationFn, options = {}) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
}; 