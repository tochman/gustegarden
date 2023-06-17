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
import CaptionCarousel from "./SheepCarousel";
// import FurForm from "./FurForm";

const SheepPresentation = () => {
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
                Våra Får
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                Den stolta lantrasen Gutefår
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
                  Vår fårbesättning på Gustegården är sannerligen något
                  speciellt. Vi är stolta över att ha åtta gutefår, en gammal
                  lantras som kännetecknas av sin charm och anpassningsförmåga.
                  Flocken består av sju beundransvärda tackor och en imponerande
                  bagge, alla med sina unika personligheter och namn.
                </Text>
                <Text fontSize={"xl"}>
                  Vår bagge, den respektingivande Urban, har en unik aura av
                  styrka och vänlighet. Bland tackorna finner vi Ulla, Ursula,
                  Maja, Aurora, Stina, Popeye, och Mona Lisa, alla med sina
                  individuella personligheter och charm.
                </Text>
                <Text fontSize={"xl"}>
                  I takt med att vårblommorna började knoppas välkomnade vi
                  också våra första lamm till Gustegårdens familj. Totalt kom 11
                  stycken lamm till världen, balanserat mellan bagg- och
                  tacklamm. Det var en oförglömlig händelse att vara vittne till
                  livets under och att se de nya lammen utforska världen runt
                  dem.
                </Text>
                <Text fontSize={"xl"}>
                  Våra tackor har visat enastående moderskap, de har
                  omsorgsfullt och föredömligt tagit hand om sina ungar. Varje
                  dag ser vi ännu mer av deras styrka och tålmodighet, vilket
                  för oss är en ständig källa till inspiration. På Gustegården
                  är våra får mer än bara djur; de är familj och vi är glada att
                  dela deras historier med dig.
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

export default SheepPresentation;
