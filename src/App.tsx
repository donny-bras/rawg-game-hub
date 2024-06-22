import { Grid, GridItem, Show } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: '"header" "main"',
        lg: '"header header" "nav main"',
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="header" p={3}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem area="nav" p={3}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main" p={3}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
