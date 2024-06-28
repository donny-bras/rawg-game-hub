import axios, { AxiosRequestConfig } from "axios";

export type FetchResponse<T> = {
  next: string | null;
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
      .then((res) => res.data);

  get = (id: string | number) =>
    axiosClient.get<T>(this.endpoint + "/" + id).then((res) => res.data);
}
