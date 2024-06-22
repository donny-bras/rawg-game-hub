import useData from "./useData";

export type Platform = {
  id: number;
  slug: string;
};

export type Game = {
  id: string;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

const useGames = () => useData<Game>("/games");

export default useGames;
