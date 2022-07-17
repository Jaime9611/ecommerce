import { useState } from 'react';

export const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [stored, setStored] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStored(value);
  };

  return [stored, setValue] as const;
};
