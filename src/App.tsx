import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@/components/navbar/NavBar";
import GameGrid from "./components/game/GameGrid";
import GenreList from "./components/genre/GenreList";
import { useState } from "react";
import { Genre } from "./services/genres-service";
import PlatformSelector from "./components/game/PlatformSelector";
import { Platform } from "./services/games-service";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const onSelectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
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
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area={"main"} paddingX={6}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={onSelectPlatform} />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
