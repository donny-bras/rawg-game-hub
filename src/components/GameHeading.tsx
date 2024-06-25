import { GameQuery } from "../hooks/useGames";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

type GameHeadingProps = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${genre?.name ?? ""} ${platform?.name ?? ""} Games`;

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
