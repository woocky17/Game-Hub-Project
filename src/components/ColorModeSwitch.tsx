import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./ui/switch";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorPalette={"green"}
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace={"nowrap"} paddingRight={2}>
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
