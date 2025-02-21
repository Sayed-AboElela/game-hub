import apiClient from "@/services/api-client";
import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchRespone<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchRespone<T>>(endpoint, { signal: controller.signal })
      .then(({ data }) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { data, error, isLoading };
};

export default useData;
