import { Genre } from "./useGeneres";
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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
