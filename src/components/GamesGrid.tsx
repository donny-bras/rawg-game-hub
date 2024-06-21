import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <ul>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text color="red">{error}</Text>}
      {games.map((game) => (
        <li>{game.name}</li>
      ))}
    </ul>
  );
};

export default GamesGrid;
