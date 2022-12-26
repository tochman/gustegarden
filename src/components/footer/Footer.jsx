import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import { useCookieConsentContext } from "@use-cookie-consent/react";
import CookieBanner from "../elements/CookieBanner";
import Logo from "../elements/Logo";
const Footer = () => {
  const { consent } = useCookieConsentContext();
  return (
    <>
      <Box
        data-cy="footer"
        pos="fixed"
        bottom="0"
        left="0"
        width={"100vw"}
        bg={useColorModeValue("gray.50")}
      >
        {!consent.persistent && <CookieBanner />}
        <Container
          maxW={"8xl"}
          py={4}
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}
        >
           <Logo width="100px"/>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
