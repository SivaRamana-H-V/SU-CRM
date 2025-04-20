import { useForm as useHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useForm = (schema, defaultValues = {}, options = {}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    getValues,
    control,
    watch,
    ...rest
  } = useHookForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
    ...options,
  });

  const onSubmit = (callback) => {
    return handleSubmit(async (data) => {
      try {
        await callback(data);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
    setValue,
    getValues,
    control,
    watch,
    onSubmit,
    ...rest,
  };
};

export default useForm; 