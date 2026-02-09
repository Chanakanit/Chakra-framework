import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";

function ProfileCard({ name, img, desc }) {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "2xl",
      }}
    >
      <Image src={img} alt={name} h="220px" w="100%" objectFit="cover" />

      <Stack p={6} spacing={3}>
        <Heading size="md">{name}</Heading>

        <Text color="gray.600" fontSize="sm">
          {desc}
        </Text>

        <Button
          mt={2}
          colorScheme="teal"
          borderRadius="full"
          _hover={{ transform: "scale(1.05)" }}
        >
          View Profile
        </Button>
      </Stack>
    </Box>
  );
}

export default ProfileCard;
