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
      <SlideFade ref={box1} in={isInViewBox1} offsetX="-200px" delay={0.5}>
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
            <Heading mt={{ base: 0, lg: "-10px" }} size={"lg"}>
              Gustegården
            </Heading>
            <Box>
              <Content>
                På Gustegården delar vi vår kärlek till djur och hållbarhet
                genom att ta hand om vår besättning av getter och får. Namnet
                Gustegården är en hyllning till den storgård som en gång låg på
                den mark vi nu arrenderar, som en påminnelse om byggdens rika
                historia.
              </Content>
              <Content mt={4}>
                Vår resa började i september 2022, när vi undertecknade ett
                avtal med den nuvarande arrendatorn. Redan samma månad hade vi
                glädjen att välkomna våra första djur till deras nya hem. Sedan
                dess har vår besättning vuxit och vi har lärt oss mycket om att
                ta hand om dessa fantastiska djur.
              </Content>
              <Content mt={4}>
                Denna hobby är vår passion, präglad av djurens välfärd,
                hållbarhet och en ständig lust att lära. Här strävar vi efter
                att bidra till en mer hållbar framtid för djur och natur. Följ
                oss på denna resa - tillsammans kan vi göra en skillnad.
              </Content>
            </Box>
          </Stack>
        </Stack>
      </SlideFade>
      <Box minHeight={"10px"} margin={"10px"} />
      <SlideFade ref={box2} in={isInViewBox2} offsetX="200px" delay={0.5}>
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
                På Gustegården är vi stolta över att vara hem för en vacker
                besättning av gutefår, en lantras med rika och långa
                traditioner. Vår flock består av sju fantastiska tackor och en
                ståtlig bagge, alla med sina unika personligheter och distinkta
                utseenden.
              </Content>
              <Content mt={4}>
                Baggen, som heter Urban, imponerar med sina kraftfulla horn och
                självklara auktoritet. Bland våra älskade tackor hittar du Ulla,
                Ursula, Maja, Aurora, Stina, Popeye och Mona Lisa, var och en
                bidrar till dynamiken i vår flock. Under våren har dessa tackor
                gett oss gåvan av elva charmiga lamm, vilket har tillfört ny
                energi och glädje till gården.
              </Content>
              <Content mt={4}>
                Gutefåren har djupa rötter i den svenska historia. De härstammar
                från de gotländska utegångsfåren och är en lantras med anor som
                sträcker sig tusentals år tillbaka. Traditionellt kallas de för
                hånnlambi, eller hornfår, på Gotland. Det är inte ovanligt att
                både baggar och tackor har horn, men baggens horn är mer
                framträdande.{" "}
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
      <SlideFade ref={box3} in={isInViewBox3} offsetX="-200px" delay={0.5}>
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
            <Heading mt={{ base: 0, lg: "-10px" }} size={"lg"}>
              Getter
            </Heading>
            <Box>
              <Content>
                I november 2022 utökade vi Gustegårdens familj med tre
                afrikanska dvärggetter - Bengt, Chinook och Congo. Dessa
                fascinerande djur har tillfört en ny dimension av glädje och
                livlighet till vår verksamhet. Under vintern 2022/23
                tillbringade de tid på Björsjöbacka Gård tillsammans med andra
                getter. Nyligen flyttade de in hos oss på Gustegården, där de nu
                frodas och skapar glädje varje dag.
              </Content>
              <Content mt={4}>
                Afrikanska dvärggetter härstammar ursprungligen från Norra
                Afrika men har spridits till alla hörn av världen. Idag kan de
                ses i olika miljöer, både domesticerade och vilda, i såväl
                Afrika som Asien. Nu har de hittat sitt hem hos oss, och vi ser
                fram emot att dela deras fortsatta resa med dig.
              </Content>
            </Box>
          </Stack>
        </Stack>
      </SlideFade>
    </Container>
  );
};

export default MissionSection;
