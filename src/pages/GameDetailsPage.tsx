import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack spacing={10}>
        <Box gap={10}>
          <Heading>{game.name}</Heading>
          <Text>{game.description_raw}</Text>
        </Box>
        <GameAttributes game={game} />
      </Stack>

      <Stack spacing={10}>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Stack>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
