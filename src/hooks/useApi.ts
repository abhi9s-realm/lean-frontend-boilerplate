import { useState, useEffect } from 'react';
import { env } from '../config/config';

interface ApiError {
  message: string;
  status?: number;
}

export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchData = async () => {
      try {
        console.log(`Fetching from: ${env.apiUrl}${endpoint}`);
        const response = await fetch(`${env.apiUrl}${endpoint}`, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError({
          message: err instanceof Error ? err.message : 'An error occurred',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
}
