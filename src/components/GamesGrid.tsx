import { Alert, AlertIcon, SimpleGrid } from "@chakra-ui/react";
import useGames, { GameQuery } from "../hooks/useGames";

import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

type GamesGridProps = {
  gamesQuery: GameQuery;
};

const GamesGrid = ({ gamesQuery }: GamesGridProps) => {
  const { data: games, error, status } = useGames(gamesQuery);
  const skeletons = Array.from({ length: 6 }).fill(0);

  if (status === "fail") {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error loading games: {error}
      </Alert>
    );
  }

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {status === "loading" &&
        skeletons.map((_, i) => (
          <GameCardContainer key={i}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {status === "success" &&
        games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
