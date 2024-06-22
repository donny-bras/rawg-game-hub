import axios, { CanceledError } from "../services/api-client";
import { useEffect, useState } from "react";

import { AxiosRequestConfig } from "axios";

type FetchResponse<T> = {
  results: T[];
};

const useData = <T>(
  url: string,
  requestConfig?: AxiosRequestConfig,
  deps: any[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setError("");

    axios
      .get<FetchResponse<T>>(url, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then(({ data }) => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, deps);

  return { data, error, isLoading };
};

export default useData;
