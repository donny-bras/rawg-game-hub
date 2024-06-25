import { Alert, AlertIcon, Button, SimpleGrid } from "@chakra-ui/react";
import useGames, { GameQuery } from "../hooks/useGames";

import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

type GamesGridProps = {
  gamesQuery: GameQuery;
};

const GamesGrid = ({ gamesQuery }: GamesGridProps) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gamesQuery);
  const skeletons = Array.from({ length: 6 }).fill(0);

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error loading games: {error.message}
      </Alert>
    );
  }

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((_, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          variant="solid"
          colorScheme="teal"
          backgroundColor={"teal.500"}
          mt={3}
          isLoading={isFetchingNextPage}
          loadingText="Loading"
          onClick={() => fetchNextPage()}
        >
          More
        </Button>
      )}
    </>
  );
};

export default GamesGrid;
