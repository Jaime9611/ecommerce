import { ChangeEvent, useState } from 'react';

export const useForm = <T,>(initialValue: T) => {
  const [state, setState] = useState<T>(initialValue);

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: value });
  };

  return { state, handleChange };
};
