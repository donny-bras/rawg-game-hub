import { UseQueryResult, useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";
import { GameDetails } from "../entities/Game";
import ms from "ms";

const apiClient = new APIClient<GameDetails>("/games");

const useGame = (slug: string): UseQueryResult<GameDetails> =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });

export default useGame;
