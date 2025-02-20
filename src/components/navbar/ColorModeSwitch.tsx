import { HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { Switch } from "../ui/switch";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch onChange={toggleColorMode} checked={colorMode === "dark"} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
