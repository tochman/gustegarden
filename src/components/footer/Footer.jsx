import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      data-cy="footer"
      pos="fixed"
      bottom="0"
      left="0"
      width={"100vw"}
      bg={useColorModeValue("gray.50")}
    >
      <Container
        maxW={"8xl"}
        py={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        {" "}
        <Text>Footer</Text>
      </Container>
    </Box>
  );
};

export default Footer;
