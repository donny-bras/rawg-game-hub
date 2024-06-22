import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 6 }).fill(0);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
      {isLoading &&
        skeletons.map((_, i) => (
          <GameCardContainer key={i}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {error && <Text color="red">{error}</Text>}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
