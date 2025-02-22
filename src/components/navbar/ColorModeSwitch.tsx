import { HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "../ui/switch";
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch onChange={toggleColorMode} checked={colorMode === "dark"} />
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
