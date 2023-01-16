import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Testimonial = ({ children }) => {
  return <Box w={{ lg: "33%" }}>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg="white"
      boxShadow={"sm"}
      p={8}
      rounded={"sm"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      fontSize={{ base: "md", lg: "lg" }}
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
    >
      {children}
    </Text>
  );
};

const CallsToAction = () => {
  const navigate = useNavigate();
  const cards = [
    {
      title: "Bli fadder",
      text: "För oss betyder Djur och Människor i balans att vi försöker ge våra djur det allra bästa vi kan vad det gäller foder och miljö som de vistas i. Allt kostar dock, och även om vi är ekonomiska behörver vi ditt stöd. Läs mer om hur du kan bli fadder åt ett eller flera av våra får, getter eller katter. Pris från 159 kr per månad.",
      target: "adoption",
    },
    {
      title: "Produkter",
      text: "Respektfullt och försiktig djurhållning innebär att vi tänker långsigtigt och tar vara på allt som våra djur producerar. Du kan ta del av det genom att köpa till exempel kött, fäll eller andra prodikter från oss. Varför inte pryda en myshörna eller din favoritfotölj med ett färfäll?  Titta i vår enkla webshop för inspiration. ",
    },
    {
      title: "Besök oss - på plats eller digitalt",
      text: "Våra djur är vana vid besökare och även om både fåren och getterna har horn, så är det tryggt att gå in i hagen och klappa dem. De gillar att kela och bli gosade med. Vi har även en egen YouTube kanal där du kan följa vårt arbete med djuren.",
    },
  ];
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} pt={16} pb={24} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Ta del av vår resa</Heading>
          <Text fontSize={{ base: "lg", lg: "xl" }}>
            Gustegården är inte bara en plats - det är en idé om att växa
            tillsammans och komma närmare naturen.
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", sm: "row", md: "row" }}
          spacing={{ base: 10, sm: 1, md: 4, lg: 10 }}
        >
          {cards.map((card, index) => (
            <Testimonial key={index}>
              <TestimonialContent>
                <TestimonialHeading>{card.title}</TestimonialHeading>
                <TestimonialText>{card.text}</TestimonialText>
                {card.target ? (
                  <Button
                    colorScheme="orange"
                    onClick={() => {
                      navigate(card.target);
                    }}
                  >
                    Läs mer
                  </Button>
                ) : (
                  <Text fontWeight={"bold"}>Kommer snart...</Text>
                )}
              </TestimonialContent>
            </Testimonial>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default CallsToAction;
