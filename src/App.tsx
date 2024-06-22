import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import { Genre } from "./hooks/useGeneres";
import GenresList from "./components/GenresList";
import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      gridTemplateAreas={{
        base: '"header" "main"',
        lg: '"header header" "nav main"',
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="header" p={3}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem area="nav" p={3}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" p={3}>
        <Stack spacing={4} align="start">
          <PlatformSelector />
          <GamesGrid selectedGenre={selectedGenre} />
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default App;
