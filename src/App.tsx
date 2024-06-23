import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import { GamesQuery } from "./hooks/useGames";
import GenresList from "./components/GenresList";
import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { useState } from "react";

function App() {
  const [gamesQuery, setGamesQuery] = useState<GamesQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <Grid
      gridTemplateAreas={{
        base: '"header" "main"',
        lg: '"header header" "nav main"',
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="header" p={3}>
        <Header
          onSearch={(searchText) =>
            setGamesQuery({ ...gamesQuery, searchText })
          }
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="nav" p={3}>
          <GenresList
            selectedGenre={gamesQuery.genre}
            onSelectGenre={(genre) => setGamesQuery({ ...gamesQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main" p={3}>
        <HStack mb={3}>
          <PlatformSelector
            selectedPlatform={gamesQuery.platform}
            onSelectPlatform={(platform) =>
              setGamesQuery({ ...gamesQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gamesQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGamesQuery({ ...gamesQuery, sortOrder })
            }
          />
        </HStack>
        <GamesGrid gamesQuery={gamesQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
