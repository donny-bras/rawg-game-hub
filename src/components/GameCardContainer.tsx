import { Box } from "@chakra-ui/react";
import React from "react";

type GameCardContainerProps = {
  children: React.ReactNode;
};

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box w="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
