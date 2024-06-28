import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt="game cover" />
      <CardBody>
        <HStack justify="space-between" mb={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
