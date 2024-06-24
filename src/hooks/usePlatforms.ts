import { UseQueryResult, useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

import platforms from "../data/platforms";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = (): UseQueryResult<Platform[]> =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
