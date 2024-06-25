import APIClient, { FetchResponse } from "../services/api-client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

import ms from "ms";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = (): UseQueryResult<FetchResponse<Platform>> =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
