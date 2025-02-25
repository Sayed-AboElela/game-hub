import GameHeading from "@/components/game/GameHeading.tsx";
import NavBar from "@/components/navbar/NavBar";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/game/GameGrid";
import PlatformSelector from "./components/game/PlatformSelector";
import SortSelector from "./components/game/SortSelector";
import GenreList from "./components/genre/GenreList";
import { Outlet } from "react-router";

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >

      <Outlet />


    </Grid>
  );
}

export default App;
