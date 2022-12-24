# Basic UI structure

I want to get the application heade and footer in palce before we move on and get the application content in place. Again, the main goal at this point is to get a fairly static page deployed, before I start adding dynamic content. 

In my test file, I add two fairly simple tests. 

```js
describe("Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected to display application title", () => {
    cy.getElement('title').should("contain.text", "GUSTEGÅRDEN");
  });

  describe('header section', () => {
    it('is expected to exist', () => {
      cy.getElement('header').should('be.visible')
    });
  });

  describe('footer section', () => {
    it('is expected to exist', () => {
      cy.getElement('footer').should('be.visible')
    });
  });
});
```

The `cy.getElement()` command is my own. I add it to Cypress by defining in in `cypress/support/commands.js`. 

```js 
Cypress.Commands.add("getElement", (identifier) => {
  cy.get(`[data-cy=${identifier}]`);
});
```

# Header & Footer

I create a simple logotype file in Adobe Illustrator. It is text based with a 21 degree arch. Before I export it as a SVG, I make sure to "expand appearance" of the object - this is necessary for a proper svg-export from the Illustrator application and beyond the scope of this walk-through. As the next step, I make sure to include the svg-file in my project forlder under `src/assets`. Next, I create a component for the logotype in a folder where I like to keep components that might be reused throughout the application. I usually call that folder `elements`:

```js
//elements/Logo.jsx
import { Image } from "@chakra-ui/react";
import logo from "../../assets/gustegarden_small.svg";

const Logo = () => {
  return (
    <Image
      htmlWidth={"210px"}
      htmlHeight={"auto"}
      src={logo}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Logo;
```

Now, for the `Header` component, I'll goo ahead and create a subfolder on its own, and go ahead and store that particular component in that folder. The reason is that I know for a fact, that I will be creating more components that will be closely related to the user interface in the header section, and I wish to separate them from the other component. One could say that I want to group my components "by topic" (or "by concern"). Anyway, here's my simple `<Header />` component:

```js
//header/Header.jsx
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Logo from "../elements/Logo";

const Header = () => {
  return (
    <Box bg={useColorModeValue("gray.50")} px={4} data-cy="header">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Logo />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
```

_Note: I could have used `Header` as tha folder name, and `index.jsx` as the file name. This is a practice I sometimes use in projects. But I recon that it messes up my intelisens completions and imports._

A similar sprocess is made for the footer section:

```js
//footer/Footer.jsx
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
```

# Hero image and title
I want my site to include a powerful hero section. There are templates for the. I ended up with this one: 

```js
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import image from "../../assets/sheep_1.jpg";

const HeroSection = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={image}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            data-cy="title"
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            GUSTEGÅRDEN - Djur och människor i balans
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"md"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Produkter
            </Button>
            
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default HeroSection;

```

This element makes use of ChakraUI. Nothing extraorinary.

# Cookie consent.

For the GDPR compiance, I will be using the [useCookieConsent hook for React.js](https://github.com/use-cookie-consent/use-cookie-consent-react) library. It is my first time, but it is headles (no UI components that are forced on me) and seems to give me enough flexibility to use whatever UI I want. 

```
$ yarn add @use-cookie-consent/react
```

Making it available throughout my application by wrapping the `App` component with a provider: 

```js
//main.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CookieConsentProvider } from '@use-cookie-consent/react'

window.store = store;
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <Provider store={store}>
      <CookieConsentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CookieConsentProvider>
    </Provider>
  </ChakraProvider>
  // </React.StrictMode>,
);

```

I will create a banner to be displayed to the user:

```js
//elements/CookieBanner.jsx
import { useCookieConsentContext } from "@use-cookie-consent/react";

const CookieBanner = () => {
  const { acceptAllCookies, declineAllCookies, acceptCookies } =
    useCookieConsentContext();

  return (
    <div>
      <button onClick={acceptAllCookies}>Accept all</button>
      <button onClick={() => acceptCookies({ thirdParty: true })}>
        Accept third-party
      </button>
      <button onClick={() => acceptCookies({ firstParty: true })}>
        Accept first-party
      </button>
      <button onClick={declineAllCookies}>Reject all</button>
    </div>
  );
};

export default CookieBanner;

```

And display it in the Footer if needed: 

```js
//elements/Footer.jsx
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import { useCookieConsentContext } from "@use-cookie-consent/react";
import CookieBanner from "../elements/CookieBanner";
const Footer = () => {
  const { consent } = useCookieConsentContext();
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
        {!consent.persistent && <CookieBanner />}
        <Text>Footer</Text>
      </Container>
    </Box>
  );
};

export default Footer;
```

That is the first iteration



