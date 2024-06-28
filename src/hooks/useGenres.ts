import APIClient, { FetchResponse } from "../services/api-client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { Genre } from "../entities/Genre";
import genres from "../data/genres";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = (): UseQueryResult<FetchResponse<Genre>> =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
