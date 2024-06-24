import axios, { CanceledError } from "../services/api-client";
import { useEffect, useState } from "react";

import { AxiosRequestConfig } from "axios";

export type FetchResponse<T> = {
  results: T[];
};

export type State<T> = {
  data: T[];
  error: string;
  status: "idle" | "loading" | "success" | "fail";
};

const useData = <T>(
  url: string,
  requestConfig?: AxiosRequestConfig,
  deps: any[] = []
) => {
  const [state, setState] = useState<State<T>>({
    data: [],
    error: "",
    status: "idle",
  });

  useEffect(() => {
    const controller = new AbortController();

    setState({ ...state, status: "loading", error: "" });

    axios
      .get<FetchResponse<T>>(url, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then(({ data }) => {
        setState({ ...state, status: "success", data: data.results });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setState({ ...state, status: "fail", error: err.message });
      });

    return () => controller.abort();
  }, deps);

  return state;
};

export default useData;
