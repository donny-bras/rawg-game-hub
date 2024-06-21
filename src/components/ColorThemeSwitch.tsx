import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";

const ColorThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" w="auto" alignItems="center" gap={2}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        id="color-mode"
        colorScheme="green"
      />
      <FormLabel htmlFor="color-mode" mb="0" mr="0">
        Dark Mode
      </FormLabel>
    </FormControl>
  );
};

export default ColorThemeSwitch;
