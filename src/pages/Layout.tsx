import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Box p={3}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
