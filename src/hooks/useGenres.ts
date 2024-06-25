import APIClient, { FetchResponse } from "../services/api-client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = (): UseQueryResult<FetchResponse<Genre>> =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { results: genres, next: null },
  });

export default useGenres;
