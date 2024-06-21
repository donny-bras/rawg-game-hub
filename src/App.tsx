import { Grid, GridItem, Show } from "@chakra-ui/react";

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
      <GridItem area="header" p={2}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem area="nav" bg="tomato" p={2}>
          Nav
        </GridItem>
      </Show>
      <GridItem area="main" bg="tomato" p={2}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
