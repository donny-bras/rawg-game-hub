import { HStack, Image } from "@chakra-ui/react";

import ColorThemeSwitch from "./ColorThemeSwitch";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <HStack justify="space-between">
      <Image src={logo} boxSize="60px" alt="logo" />
      <ColorThemeSwitch />
    </HStack>
  );
};

export default Header;
