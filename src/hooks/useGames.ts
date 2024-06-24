import { UseQueryResult, useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export type Game = {
  id: string;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
};

const useGames = (gameQuery: GameQuery): UseQueryResult<Game[]> =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data.results),
  });

export default useGames;
