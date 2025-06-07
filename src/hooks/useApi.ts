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
        const error = err instanceof Error ? err : new Error('An error occurred');
        setError(error);
        if (env.debug) {
          console.error('API Error:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
}
