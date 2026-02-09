import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const profiles = [
    {
      name: "Big",
      img: "https://picsum.photos/400/300?1",
      desc: "นักพัฒนาที่ชอบเรียนรู้สิ่งใหม่ และอยากเป็น Full Stack ในอนาคต",
    },
    {
      name: "Rabbit Lover",
      img: "https://picsum.photos/400/300?2",
      desc: "รักสัตว์ โดยเฉพาะกระต่าย หมาน้อย และแมวสุดน่ารัก",
    },
    {
      name: "Dream Builder",
      img: "https://picsum.photos/400/300?3",
      desc: "กำลังสร้างเส้นทางของตัวเอง เพื่อไปทำงานต่างประเทศในอนาคต",
    },
  ];

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, teal.50, blue.100)"
      p={10}
    >
      <Heading textAlign="center" mb={2}>
        My Profile Cards
      </Heading>
      <Text textAlign="center" mb={10} color="gray.600">
        Example beautiful UI with Chakra UI ✨
      </Text>

      <SimpleGrid columns={[1, 1, 3]} spacing={8} maxW="1000px" mx="auto">
        {profiles.map((p, i) => (
          <ProfileCard key={i} {...p} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default App;
