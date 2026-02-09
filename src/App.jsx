import { Box, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

const profiles = [
  {
    name: "Big",
    img: "https://picsum.photos/400/300?1",
    desc: "Future full‑stack developer who loves learning new things.",
  },
  {
    name: "Rabbit Lover",
    img: "https://picsum.photos/400/300?2",
    desc: "Animal lover who enjoys calm and aesthetic moments.",
  },
  {
    name: "Dream Builder",
    img: "https://picsum.photos/400/300?3",
    desc: "Building a path to work abroad in the future.",
  },
];

export default function App() {
  return (
    <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
      <Navbar />

      <Box px={12} py={12}>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {profiles.map((p, i) => (
            <ProfileCard key={i} {...p} />
          ))}
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
}