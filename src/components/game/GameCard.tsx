import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import Emoji from "@/components/game/Emoji.tsx";
import Game from "@/entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-service";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" alignItems="center" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top} /></Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
