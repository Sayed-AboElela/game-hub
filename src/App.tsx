import "./App.css";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "@/components/navbar/NavBar";
import GameGrid from "./components/game/GameGrid";
import GenreList from "./components/genre/GenreList";
import { useState } from "react";
import { Genre } from "./services/genres-service";
import PlatformSelector from "./components/game/PlatformSelector";
import { Platform } from "./services/games-service";
import SortSelector from "./components/game/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem hideBelow="lg" area={"aside"} paddingX={5}>
        <GenreList
          onSelectGenre={onSelectGenre}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>

      <GridItem area={"main"} paddingX={6}>
        <HStack gap={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={onSelectPlatform}
          />
          <SortSelector/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
