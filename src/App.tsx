import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameHeading from "./components/GameHeading";
import { GameQuery } from "./hooks/useGames";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import Header from "./components/Header";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { useState } from "react";

function App() {
  const [gamesQuery, setGamesQuery] = useState<GameQuery>({
    sortOrder: "",
    searchText: "",
  });

  return (
    <Grid
      gridTemplateAreas={{
        base: '"header" "main"',
        lg: '"header header" "nav main"',
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
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
            selectedGenreId={gamesQuery.genreId}
            onSelectGenre={(genre) =>
              setGamesQuery({ ...gamesQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main" p={3}>
        <GameHeading gameQuery={gamesQuery} />
        <HStack mb={3} mt={3}>
          <PlatformSelector
            selectedPlatformId={gamesQuery.platformId}
            onSelectPlatform={(platform) =>
              setGamesQuery({ ...gamesQuery, platformId: platform.id })
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
