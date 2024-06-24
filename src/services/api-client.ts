import axios, { AxiosRequestConfig } from "axios";

type FetchResponse<T> = {
  results: T[];
};

const axiosClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "83ab1d3b6d324e578860899367c5526d",
  },
});

export default class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (requestConfig?: AxiosRequestConfig) =>
    axiosClient
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data.results);
}
