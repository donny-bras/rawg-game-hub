import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameHeading from "../components/GameHeading";
import GamesGrid from "../components/GamesGrid";
import GenresList from "../components/GenresList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      gridTemplateAreas={{
        base: '"main"',
        lg: '"nav main"',
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
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
};

export default HomePage;
