import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import HeroSection from "./HeroSection";

export default function Simple() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <HeroSection />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              Fadderskap
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Från 159 kr / månad
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
                Genom att bli fadder åt ett av vår djur stöttar du oss i vårt
                arbete och är med och betalar för foder, utrustning och allt
                annat som behövs för att djuren skall kunna leva ett så
                naturligt liv som möjligt.
              </Text>
              <Text fontSize={"lg"}>
                Fadderskap kan tecknas från tre månader upp till ett helt år i
                taget och avser såväl vuxna tackor och baggar som lamm eller
                killingar. Du erhåller ett fadderbevis med bild på ditt djur
                samt en beskrivning av dess utseende och karaktär. En gång i
                månaden spelar vi in en kort video med en uppdatering om djuret
                och skickar den i form av en privat YouTube länk (som du
                dela med din famil och vänner).
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                DU FÅR
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Fadderbevis i A4 format</ListItem>
                  <ListItem>
                    Månadsuppdatering med bilder eller video om ditt fadderdjur
                  </ListItem>
                  <ListItem>Guidad besök på gården</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>15% rabatt i vår shop</ListItem>
                  <ListItem>T-shirt (6 månaders fadderskap)</ListItem>
                  <ListItem>Hoodie (12 månaders fadderskap)</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Priser
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    3 månader:
                  </Text>{" "}
                  597 kr (199 kr / månad)
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    6 månader:
                  </Text>{" "}
                  1 074 kr (179 kr / månad)
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    12 månader:
                  </Text>{" "}
                  1 908 kr (159 kr / månad)
                </ListItem>
              </List>
            </Box>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>
                Du betalar inget direkt. Vi kommer att skicka en betallänk till
                dig efter att vi har mottagit din beställning och bekräftat dina
                uppgifter per mail. Om du till exempel vill ge bort ett
                fadderskap i present skriver du det i meddelandefältet. Glöm
                inte att ange storlek på t-shirt eller hoodie om du tecjnar dig
                för ett 6 eller 12-månaders fadderskap.
              </Text>
            </VStack>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            BESTÄLL
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
