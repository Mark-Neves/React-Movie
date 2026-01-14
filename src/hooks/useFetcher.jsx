import { useState, useEffect } from 'react';

export function useFetcher({ url }) {
  const [data, setData] = useState({});
  const [dataArr, setDataArr] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url === null) return;
    const controller = new AbortController();
    const fetcher = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-API-KEY': import.meta.env.VITE_KINOPOISK_API_KEY,
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('HTTP Error');
        const data = await response.json();
        setData(data);
        setDataArr(Array.isArray(data) ? data : data.items || data.films || []);
        setTotalPages(data.totalPages || 1);
      } catch (e) {
        if (e.name === 'AbortError') return;
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetcher();
    return () => controller.abort();
  }, [url]);

  return { data, dataArr, totalPages, isLoading, error };
}
