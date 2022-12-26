import {
  Button,
  Stack,
  Heading,
  Box,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useCookieConsentContext } from "@use-cookie-consent/react";
import Content from "./Content";

const CookieBanner = () => {
  const { acceptAllCookies, declineAllCookies, acceptCookies } =
    useCookieConsentContext();

  return (
    <Alert data-cy='cookie-banner'>
      <AlertIcon />
      <Stack spacing={2} direction="row">
        <Box>
          <Heading size={"md"}>Vi bryr oss om din integritet</Heading>
          <Content size="sm">
            Genom att klicka på "acceptera alla cookies" samtycker du till
            lagring av cookies på din enhet för att förbättra navigeringen på
            webbplatsen, analysera webbplatsens användning och bistå i våra
            marknadsföringsinsatser.{" "}
          </Content>
        </Box>
        <Stack>
          <Button
            size={"sm"}
            colorScheme="orange"
            variant="solid"
            onClick={acceptAllCookies}
          >
            Acceptera alla
          </Button>
          <Button
            size={"sm"}
            colorScheme="orange"
            variant="outline"
            onClick={declineAllCookies}
          >
            Avvisa alla
          </Button>
        </Stack>
      </Stack>
    </Alert>
  );
};

export default CookieBanner;
