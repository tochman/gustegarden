import {
  Fade,
  Heading,
  Container,
  Stack,
  Image,
  Skeleton,
  Box,
  Divider,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Content from "./Content";
import image from "../../assets/farm_view.jpg";
import image_2 from "../../assets/sheep_closeup.jpg"

const MissionSection = () => {
  const content = useRef(null);
  const isInView = useInView(content);
  console.log(isInView);
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Fade ref={content} in={isInView} offsetY="20px" delay={0.2}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
        >
          <Box mr={{ base: 0, md: 5 }} pos="relative">
            <Image
              boxShadow="lg"
              w="100%"
              h="100%"
              minW={{ base: "auto", md: "30rem" }}
              maxH="20rem"
              objectFit="cover"
              src={image}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
          <Stack direction="column" spacing={6} justifyContent="center">
            <Heading size={"lg"}>Bra produkter till ett bra pris</Heading>
            <Box>
              <Content>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam aliquam enim ipsa nesciunt, odio, in suscipit
                repudiandae inventore ab sint sed dignissimos, laudantium eos
                modi aperiam repellat eveniet labore commodi!
              </Content>
              <Content mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quidem quod laborum dolores unde ex dolor atque, ea laboriosam.
                Placeat aspernatur veniam ducimus mollitia dolore labore non
                adipisci accusantium inventore.
              </Content>
            </Box>
          </Stack>
        </Stack>
      </Fade>
      <Divider m={"20px"} />
      <Fade in={isInView} offsetY="20px" delay={0.2}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
        >
          <Stack direction="column" spacing={6} justifyContent="center">
            <Heading size={"lg"}>Glada djur är karma</Heading>
            <Box>
              <Content>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam aliquam enim ipsa nesciunt, odio, in suscipit
                repudiandae inventore ab sint sed dignissimos, laudantium eos
                modi aperiam repellat eveniet labore commodi!
              </Content>
              <Content mt={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quidem quod laborum dolores unde ex dolor atque, ea laboriosam.
                Placeat aspernatur veniam ducimus mollitia dolore labore non
                adipisci accusantium inventore.
              </Content>         
            </Box>
          </Stack>
          <Box mr={{ base: 0, md: 5 }} pos="relative">
            <Image
              boxShadow="lg"
              w="100%"
              h="100%"
              minW={{ base: "auto", md: "30rem" }}
              maxH="20rem"
              objectFit="cover"
              src={image_2}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
        </Stack>
      </Fade>
    </Container>
  );
};

export default MissionSection;
