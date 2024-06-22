import { HStack, Icon } from "@chakra-ui/react";

import { BsWindows } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { IconType } from "react-icons";
import { IoIosAppstore } from "react-icons/io";
import { Platform } from "../hooks/useGames";
import { SiNintendo } from "react-icons/si";

const iconByPlatformMap: Record<string, IconType> = {
  pc: BsWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: IoIosAppstore,
  android: DiAndroid,
  web: FaGlobe,
};

type PlatformIconListProps = {
  platforms: Platform[];
};

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  return (
    <HStack my={2}>
      {platforms.map(({ id, slug }) => (
        <Icon as={iconByPlatformMap[slug]} key={id} color="gray.500">
          {slug}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
