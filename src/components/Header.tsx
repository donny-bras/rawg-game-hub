import { HStack, Image, Spacer } from "@chakra-ui/react";

import ColorThemeSwitch from "./ColorThemeSwitch";
import SearchInput from "./SerachInput";
import logo from "../assets/logo.webp";

type HeaderProps = {
  onSearch: (searchText: string) => void;
};

const Header = ({ onSearch }: HeaderProps) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" alt="logo" />
      <SearchInput onSearch={onSearch} />
      <Spacer />
      <ColorThemeSwitch />
    </HStack>
  );
};

export default Header;
