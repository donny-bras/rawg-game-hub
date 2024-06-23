import { Genre } from "./useGenres";
import useData from "./useData";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: string;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

export type GamesQuery = {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
};

const useGames = (gamesQuery: GamesQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gamesQuery.genre?.id,
        platforms: gamesQuery.platform?.id,
        ordering: gamesQuery.sortOrder,
        search: gamesQuery.searchText,
      },
    },
    [gamesQuery]
  );

export default useGames;
