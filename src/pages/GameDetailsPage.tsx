import { Center, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import CriticScore from "../components/CriticScore";
import GameAttribute from "../components/GameAttribute";
import GameAttributes from "../components/GameAttributes";
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
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailsPage;
