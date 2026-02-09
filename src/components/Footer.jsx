import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box mt={32} py={8} textAlign="center" borderTopWidth="1px" _dark={{ borderColor: "gray.700" }}>
      <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
        Built with React and Chakra UI
      </Text>
    </Box>
  );
}