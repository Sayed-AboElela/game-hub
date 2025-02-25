import { Grid } from "@chakra-ui/react";
import { Outlet } from "react-router";
import "./App.css";

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
