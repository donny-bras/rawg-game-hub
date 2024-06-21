import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text color="red">{error}</Text>}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
