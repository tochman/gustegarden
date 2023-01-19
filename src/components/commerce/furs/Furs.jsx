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
} from "@chakra-ui/react";
import { useState } from "react";
import CaptionCarousel from "./FurCarousel";
import FurForm from "./FurForm";

const Furs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({});
  return (
    <>
      <FurForm isOpen={modalVisible} setModalVisible={setModalVisible} />
      <Container maxW={"7xl"}>
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
                Fårskinn & fällar
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Naturligt inredning till hemmet - Från 1 899 kr till 2 599 kr
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
                  Fäll från fårpäls är väldigt populära som inredningsdetaljer.
                  De är vackra, hållbara och naturliga. Fårskinn kan användas på
                  en mängd olika sättsom inredning till hemmet: i
                  favoritfotöljen, i sovrummet eller som ett mjukt och
                  fantastiskt skönt underlag i barnvagnen.
                </Text>
                <Text fontSize={"xl"}>
                  I samband med att ett djur slaktas, tar vi vara på skinnet och
                  skickar iväg det till beredning. Det betyder att vi inte har
                  ett jättestort utbud av fällar att erbjuda, men att de fällar
                  vi har är från djur vi känner och har tagit hand om. Fällen är
                  tvättbara och håller en hög kvalitet. Alla våra fäll kommer
                  antingen från egna djur eller från våra vänner, som till
                  exemper Björsöbacka Gård.
                </Text>
                <Text fontSize={"xl"}>
                  Fåren kommer i olika färger: mörkg-, mellan- och ljsgrått samt
                  vitt. Notera att fällens färg varierar en del och du kommer få
                  en bild på just den fäll som vi väljer ut åt dig innan du
                  slutgiltigt bekräftar din beställning.
                </Text>
                <Text fontSize={"xl"}>
                  Storleken på fällen varierar beroende på om de kommer från
                  vuxna djur eller lamm. Normalt är lammskinn ca 100 x 80 cm och
                  fäll från vuxna tackor 110 x 85 cm. Fällen från lamm är
                  mjukare och känns skönare mot huden.
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
                  HUR BESTÄLLER JAG?
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>
                      1. Fyll i och skicka formuläret som visar sig när du
                      klickar på "BESTÄLL"
                    </ListItem>
                    <ListItem>
                      2. Vi går igenom vår lager av fällar och återkommer till
                      dig per mail med en bild och pris på det fäll som vi tror
                      kommer passa.{" "}
                    </ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>
                      3. Du återkommer med ett godkännande eller andra önskemål.
                    </ListItem>
                    <ListItem>
                      4. Skinnet skickas till dig tillsamans med skötselråd samt
                      äkthetsintyg. Du kan självklar även komma förbi gården och
                      hämta upp det själv.
                    </ListItem>
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
                      Lammfäll:
                    </Text>{" "}
                    2 100 till 2 599 kr
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Färfäll:
                    </Text>{" "}
                    1 899 till 2 299 kr
                  </ListItem>
                </List>
              </Box>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"lg"}>
                  <chakra.span fontWeight={"bold"}>
                    Du betalar inget direkt.
                  </chakra.span>{" "}
                  Vi kommer att skicka en betallänk till dig efter att vi har
                  mottagit din beställning och bekräftat att vi har valt ett
                  fäll som passar dig. Om du till exempel vill ge bort ett fäll
                  i present skriver du det i meddelandefältet.
                </Text>
              </VStack>
            </Stack>

            <Button
              colorScheme="orange"
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={() => setModalVisible(true)}
            >
              BESTÄLL
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Furs;
