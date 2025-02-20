import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";

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
        aside
      </GridItem>
      <GridItem area={"main"}>main</GridItem>
    </Grid>
  );
}

export default App;
