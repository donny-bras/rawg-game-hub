import { Alert, AlertIcon, Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Header from "../components/Header";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Header />
      <Box p={5}>
        <Heading>Oops...</Heading>
        <Alert status="error">
          <AlertIcon />
          {isRouteErrorResponse(error)
            ? "Page not found"
            : `An unexpected error has occurred: ${(error as any)?.message}`}
        </Alert>
      </Box>
    </>
  );
};

export default ErrorPage;
