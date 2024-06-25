import APIClient, { FetchResponse } from "../services/api-client";
import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "@tanstack/react-query";

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

const useGames = (
  gameQuery: GameQuery
): UseInfiniteQueryResult<InfiniteData<FetchResponse<Game>>> =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGames;
