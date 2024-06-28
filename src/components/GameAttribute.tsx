import { Box, Heading } from "@chakra-ui/react";

import { ReactNode } from "react";

type GameAttributeProps = {
  title: string;
  children: ReactNode;
};

const GameAttribute = ({ title, children }: GameAttributeProps) => {
  return (
    <Box>
      <Heading fontSize="lg" color="gray.500" mb={1}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default GameAttribute;
