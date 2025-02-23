import GameHeading from "@/components/game/GameHeading.tsx";
import NavBar from "@/components/navbar/NavBar";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/game/GameGrid";
import PlatformSelector from "./components/game/PlatformSelector";
import SortSelector from "./components/game/SortSelector";
import GenreList from "./components/genre/GenreList";
import { Genre } from "./services/genres-service";
import { Platform } from "./services/platform-service";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const onSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const onSearch = (searchText: string) => {
    console.log(searchText);
    setGameQuery({ ...gameQuery, searchText });
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
        <NavBar onSearch={onSearch} />
      </GridItem>

      <GridItem hideBelow="lg" area={"aside"} paddingX={5}>
        <GenreList
          onSelectGenre={onSelectGenre}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>

      <GridItem area={"main"} paddingX={6}>
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={onSelectPlatform}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={onSelectSortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
