import { GameQuery } from "../hooks/useGames";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

type GameHeadingProps = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${genre?.name ?? ""} ${platform?.name ?? ""} Games`;

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
