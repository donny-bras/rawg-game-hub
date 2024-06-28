import { HStack, Image, Spacer } from "@chakra-ui/react";

import ColorThemeSwitch from "./ColorThemeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <HStack p={3}>
      <Image src={logo} boxSize="60px" alt="logo" />
      <SearchInput />
      <Spacer />
      <ColorThemeSwitch />
    </HStack>
  );
};

export default Header;
