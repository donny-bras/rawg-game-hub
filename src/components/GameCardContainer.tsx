import { Box } from "@chakra-ui/react";
import React from "react";

type GameCardContainerProps = {
  children: React.ReactNode;
};

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      w="100%"
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.2s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
