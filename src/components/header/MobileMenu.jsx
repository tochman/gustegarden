import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({btnRef, visible }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();


  return (
    <>
      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        right={5}
        top={visible ? "0" : "-85px"}
        transition="0.2s linear"
      >
        <Button
          ref={btnRef}
          variant="outline"
          onClick={onOpen}
          data-cy="menu-button"
        >
          <HamburgerIcon />
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigera</DrawerHeader>

            <DrawerBody>
              <Button onClick={() => navigate("/")}>Våra Får</Button>
              <Button onClick={() => navigate("/")}>Våra Getter</Button>
              <Button onClick={() => navigate("/")}>Besök oss</Button>
              <Button onClick={() => navigate("/")}>Adoptera ett djur</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default MobileMenu;
