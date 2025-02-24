import GameHeading from "@/components/game/GameHeading.tsx";
import NavBar from "@/components/navbar/NavBar";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/game/GameGrid";
import PlatformSelector from "./components/game/PlatformSelector";
import SortSelector from "./components/game/SortSelector";
import GenreList from "./components/genre/GenreList";

function App() {

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
        <GenreList />
      </GridItem>

      <GridItem area={"main"} paddingX={6}>
        <GameHeading />
        <HStack gap={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid  />
      </GridItem>
    </Grid>
  );
}

export default App;
