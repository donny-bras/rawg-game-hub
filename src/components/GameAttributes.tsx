import { SimpleGrid, Text } from "@chakra-ui/react";

import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";
import GameAttribute from "./GameAttribute";

type GameAttributesProps = {
  game: Game;
};

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} my={5} spacing={4}>
      <GameAttribute title="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameAttribute>

      <GameAttribute title="Metascore">
        <CriticScore score={game.metacritic} />
      </GameAttribute>

      <GameAttribute title="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameAttribute>

      <GameAttribute title="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameAttribute>
    </SimpleGrid>
  );
};

export default GameAttributes;
