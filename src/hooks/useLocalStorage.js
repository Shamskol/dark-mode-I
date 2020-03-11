import {useState} from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setstoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  return [storedValue];
};
  const setValue = value => {
    setstoredValue(value);
    window.localStorage.setItem(key, stringify(value));
  };

