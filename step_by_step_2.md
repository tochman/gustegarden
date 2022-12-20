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

# Header

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