import { Box, Heading, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      px={6}
      py={4}
      display="flex"
      alignItems="center"
      borderBottomWidth="1px"
      _dark={{ borderColor: "gray.700" }}
    >
      <Heading size="md">Chakra Demo</Heading>

      <Spacer />

      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        aria-label="toggle theme"
        borderRadius="full"
      />
    </Box>
  );
}