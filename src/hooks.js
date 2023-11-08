import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};
