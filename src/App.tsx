import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameHeading from "./components/GameHeading";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

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
        <GameHeading />
        <HStack mb={3} mt={3}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
