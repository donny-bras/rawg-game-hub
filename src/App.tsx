import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      gridTemplateAreas={{
        base: '"header" "main"',
        lg: '"header header" "nav main"',
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="header" bg="coral">
        Header
      </GridItem>
      <Show above="lg">
        <GridItem area="nav" bg="tomato">
          Nav
        </GridItem>
      </Show>
      <GridItem area="main" bg="tomato">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
