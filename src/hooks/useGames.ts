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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
