import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import image from "../../assets/sheep_group_closeup.jpg";

const HeroSection = () => {
  return (
    <Flex
      w={"full"}
      h={"50vh"}
      pl={1}
      backgroundImage={image}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      rounded={"md"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          {/* <Text
            data-cy="title"
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Småskaligt - djur och människor i balans
          </Text> */}
          <Stack direction={"row"}>
            {/* <Button
              bg={"blue.400"}
              rounded={"md"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Produkter
            </Button> */}
            
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
