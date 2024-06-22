import { Alert, AlertIcon, SimpleGrid } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGeneres";
import useGames from "../hooks/useGames";

type GamesGridProps = {
  selectedGenre: Genre | null;
};

const GamesGrid = ({ selectedGenre }: GamesGridProps) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = Array.from({ length: 6 }).fill(0);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5}>
      {isLoading &&
        skeletons.map((_, i) => (
          <GameCardContainer key={i}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {error && (
        <Alert status="error">
          <AlertIcon />
          There was an error loading games
        </Alert>
      )}
      {games.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
