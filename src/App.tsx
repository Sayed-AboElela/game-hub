import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@/components/navbar/NavBar";
import GameGrid from "./components/game/GameGrid";
import GenreList from "./components/genre/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      <GridItem hideBelow="lg" area={"aside"}>
        <GenreList />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
