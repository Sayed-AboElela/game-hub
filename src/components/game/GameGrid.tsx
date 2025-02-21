import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";
import GameCard from "./GameCard";
import { Game } from "@/services/games-service";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        gap="1rem"
        padding="1rem"
     
      >
        {games.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
