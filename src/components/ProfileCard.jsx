import { Box, Image, Text, Heading, Stack, Button } from "@chakra-ui/react";

export default function ProfileCard({ name, img, desc }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      bg="white"
      _dark={{ bg: "gray.800", borderColor: "gray.700" }}
      transition="0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
    >
      <Image src={img} alt={name} h="200px" w="100%" objectFit="cover" />

      <Stack spacing={2} p={4}>
        <Heading size="md">{name}</Heading>
        <Text color="gray.600" _dark={{ color: "gray.400" }}>
          {desc}
        </Text>

        <Button size="sm" colorScheme="teal" alignSelf="start">
          View Profile
        </Button>
      </Stack>
    </Box>
  );
}