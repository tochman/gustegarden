import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  chakra,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import CaptionCarousel from "./GoatCarousel";
// import FurForm from "./FurForm";

const GoatPresentation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({});
  return (
    <>
      {/* <FurForm isOpen={modalVisible} setModalVisible={setModalVisible} /> */}
      <Container maxW={"7xl"} mt={20}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <CaptionCarousel />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Afrikanska Dvärggetter på Gustegården
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Små i storlek, stora i personlighet
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  På Gustegården kan vi stolt presentera en trio av afrikanska
                  dvärggetter som en del av vår djurfamilj. Dessa charmerande,
                  lekfulla och intelligenta varelser är en oändlig källa till
                  glädje och underhållning.
                </Text>
                <Text fontSize={"xl"}>
                  Bengt, vår modige och tuffa bock, har en oemotståndlig charm
                  och en vilja av stål. Trots hans mindre storlek, har Bengt en
                  större personlighet som verkligen tar plats. Han är en
                  naturlig ledare och tar alltid hand om sina två härliga
                  getdamer, Congo och Chinook.
                </Text>
                <Text fontSize={"xl"}>
                  Congo, med sin eleganta päls och nyfikna blick, är en
                  äventyrlig dam med en beslutsam karaktär. Hon är alltid redo
                  att utforska nya platser och verkar älska varje minut av livet
                  på gården. Chinook, å andra sidan, är lugnheten personifierad.
                  Hon är oerhört tålig och tycks alltid tänka innan hon agerar.
                  Men trots hennes lugna yttre har hon också en busig sida, och
                  när hon väl bestämmer sig för att ställa till med hyss, är hon
                   energisk och påhittig.
                </Text>
                <Text fontSize={"xl"}>
                  Dessa tre afrikanska dvärggetter kompletterar varandra perfekt
                  och deras dynamik är en fröjd att skåda. Trots att de är små i
                  storlek, har de enorma personligheter som verkligen lyser
                  igenom. Oavsett om det är Bengts ledarskap, Congos
                  äventyrslust eller Chinooks lugna natur, är det klart att
                  dessa tre är en central del av livet på Gustegården.
                </Text>
              </VStack>

            </Stack>

            <Box mt={{ base: 0, sm: 8 }}>
              <Divider padding={4} mb={{ base: 0, sm: 8 }} />
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default GoatPresentation;
