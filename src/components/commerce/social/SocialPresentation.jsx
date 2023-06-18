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
import CaptionCarousel from "./SocialCarousel";
// import FurForm from "./FurForm";

const SocialPresentation = () => {
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
                Besök oss på Gustegården
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Upplev djurlivet nära och följ vår resa
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
                  Vi ser fram emot att välkomna dig till Gustegården, antingen
                  på plats eller online. Häng med på vår resa när vi skapar en
                  unik plats för djurälskare att lära, växa och inspireras. Vi
                  är i startgroparna av ett spännande äventyr och vi inbjuder
                  dig att vara en del av vår resa.
                </Text>
                <Text fontSize={"xl"}>
                  Även om vi inte är en traditionell gård, är vår passion för
                  våra djur lika stor. Besökare är välkomna att boka en tid för
                  att komma och interagera med våra gutefår och afrikanska
                  dvärggetter. Ta chansen att lära känna varje djurs unika
                  personlighet och få en inblick i deras dagliga liv.
                </Text>
                <Text fontSize={"xl"}>
                  Vårt mål är att skapa en plats där djuren kan frodas, och där
                  besökare kan lära sig mer om dem på ett direkt och personligt
                  sätt. Genom att besöka oss kan du bidra till denna vision och
                  få en djupare förståelse och uppskattning för dessa
                  fantastiska varelser.
                </Text>
                <Text fontSize={"xl"}>
                  Om du inte kan besöka oss personligen just nu, var inte
                  orolig! Du kan följa vår resa och se våra djurs vardagliga
                  äventyr på sociala medier. Vi finns på YouTube och TikTok, där
                  vi regelbundet delar uppdateringar, bilder och videoklipp.
                  Detta ger dig möjlighet att följa med på vår resa när vi
                  bygger upp verksamheten på Gustegården, oavsett var du är.
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

export default SocialPresentation;
