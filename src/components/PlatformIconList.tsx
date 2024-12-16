import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactElement } = {
    pc: <FaWindows />, // Ícono para PC
    playstation: <FaPlaystation />, // Ícono para PlayStation
    xbox: <FaXbox />, // Ícono para Xbox
    nintendo: <SiNintendo />, // Ícono para Nintendo
    mac: <FaApple />,
    linux: <FaLinux />, // Ícono para Linux
    android: <FaAndroid />, // Ícono para Android
    ios: <MdPhoneIphone />, // Ícono para iPhone
    web: <BsGlobe />, // Ícono para Web
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color={"gray.500"}>
          {iconMap[platform.slug]}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
