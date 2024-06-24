import { UseQueryResult, useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

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
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
