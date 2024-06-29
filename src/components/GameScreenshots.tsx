import { SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

type GameScreenshotsProps = {
  gameId: number;
};

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, error } = useScreenshots(gameId);

  if (error) throw error;

  const screenshots = data?.results;

  return !!screenshots?.length ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {screenshots.map((screenshot) => (
        <img
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.image}
        />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
