import { GameQuery } from "../hooks/useGames";
import { Heading } from "@chakra-ui/react";

type GameHeadingProps = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.genre?.name ?? ""} ${
    gameQuery.platform?.name ?? ""
  } Games`;

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
