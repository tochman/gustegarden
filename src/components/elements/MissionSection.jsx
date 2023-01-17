import {
  SlideFade,
  Heading,
  Container,
  Stack,
  Image,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Content from "./Content";
import image from "../../assets/farm_view.jpg";
import image_2 from "../../assets/sheep_closeup.jpg";
import image_3 from "../../assets/goats_main_view.jpg";
const MissionSection = () => {
  const box1 = useRef(null);
  const isInViewBox1 = useInView(box1, { once: true });
  const box2 = useRef(null);
  const isInViewBox2 = useInView(box2, { once: true });
  const box3 = useRef(null);
  const isInViewBox3 = useInView(box3, { once: true });
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <SlideFade
        ref={box1}
        in={isInViewBox1}
        offsetX="-200px"
        delay={0.5}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          padding={2}
        >
          <Box mr={{ base: 0, md: 5 }} pos="relative">
            <Image
              boxShadow="lg"
              padding={2}
              w="100%"
              h="100%"
              minW={{ base: "auto", md: "30rem" }}
              maxH="20rem"
              objectFit="cover"
              src={image}
              fallback={<Skeleton />}
            />
          </Box>
          <Stack direction="column" spacing={6} justifyContent="center">
            <Heading mt={{base: 0, lg: "-10px"}} size={"lg"}>
              Gustegården
            </Heading>
            <Box>
              <Content>
                På Gustegården håller vi getter och får. Namnet kommer från den
                storgård som en gång i tiden låg på den mark vi arrenderar.
              </Content>
              <Content mt={4}>
                Under September 2022 skrev vi ett avtal med nuvarande
                arrendatorn och redan samma månad kunde våra första djur flytta
                in.
              </Content>
              <Content mt={4}>
                Det här är vår hobby och arbetet kännetecknas av omtanke om
                djuren, engagemang för hållbarhet och intresse att kontinuerligt
                lära sig mer om djurhållning.
              </Content>
            </Box>
          </Stack>
        </Stack>
      </SlideFade>
      <Box minHeight={"10px"} margin={"10px"} />
      <SlideFade
        ref={box2}
        in={isInViewBox2}
        offsetX="200px"
        delay={0.5}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
        >
          <Stack
            direction="column"
            spacing={6}
            justifyContent="center"
            padding={2}
            ml={2}
          >
            <Heading size={"lg"}>Gutefår</Heading>
            <Box>
              <Content>
                Vår fårbesättning består av 8 st gutefår. Vi har 7 stycken
                härliga tackor och en fantastisk bagge. Baggen heter Urban och
                bland tackorna finns Ulla, Ursula, Maja, Aurora, Stina, Popeye,
                och Mona Lisa.
              </Content>
              <Content mt={4}>
                Gutefåren härstammar från de gotländska utegångsfåren och är
                en lantras med anor från flera tusen år tillbaka. På Gotland
                kallas de traditionellt för hånnlambi (hornfår). Både baggar och
                tackor har horn, men baggens horn är kraftigare än tackans.
                Färgen på våra varierar i vitt, grått och svart.
              </Content>
            </Box>
          </Stack>
          <Box mr={{ base: 0, md: 5 }} pos="relative">
            <Image
              boxShadow="lg"
              w="100%"
              h="100%"
              padding={2}
              minW={{ base: "auto", md: "30rem" }}
              maxH="20rem"
              objectFit="cover"
              src={image_2}
              fallback={<Skeleton />}
            />
          </Box>
        </Stack>
        <Box minHeight={"10px"} margin={"20px"} />
      </SlideFade>
      <SlideFade
        ref={box3}
        in={isInViewBox3}
        offsetX="-200px"
        delay={0.5}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          padding={2}
        >
          <Box mr={{ base: 0, md: 5 }} pos="relative">
            <Image
              boxShadow="lg"
              padding={2}
              w="100%"
              h="100%"
              minW={{ base: "auto", md: "30rem" }}
              maxH="20rem"
              objectFit="cover"
              src={image_3}
              fallback={<Skeleton />}
            />
          </Box>
          <Stack direction="column" spacing={6} justifyContent="center">
            <Heading mt={{base: 0, lg: "-10px"}} size={"lg"}>
              Getter
            </Heading>
            <Box>
              <Content>
                Våra getter heter Chinook och Congo. Det är två Afrikanska
                Dvärggetter som vi adopterade under November 2022. De har fått
                bo bland andra getter på Björsjöbacka Gård under vintern
                2022/23.
              </Content>
              <Content mt={4}>
                Den Afrikanska Dvärggeten kommer ursprungligen från Norra
                Afrika. Idag finns den i hela världen men lever även fritt i
                Afrika och Asien.
              </Content>
            </Box>
          </Stack>
        </Stack>
      </SlideFade>
    </Container>
  );
};

export default MissionSection;
