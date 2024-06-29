import APIClient, { FetchResponse } from "../services/api-client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import { Screenshot } from "../entities/Screenshot";
import ms from "ms";

const useScreenshots = (
  gameId: number
): UseQueryResult<FetchResponse<Screenshot>> => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
  });
};

export default useScreenshots;
