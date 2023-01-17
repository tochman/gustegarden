import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "../../utilities/debounce";
import Logo from "../elements/Logo";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const navbarStyles = {
    width: "100%",
    position: "fixed",
    top: "0px",
    transition: "0.2s linear",
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid rgba(0, 0, 0, .1)",
    zIndex: "40",
    boxShadow: "0 2px 5px -1px rgba(0, 0, 0, .08)",
  };

  const handleScroll = debounce((event) => {
    const currentScrollPos = window.pageYOffset;
    const cursorPosition = event.clientY < window.innerHeight / 3;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 90 ||
        cursorPosition
    );

    setPrevScrollPos(currentScrollPos);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <Box
      py={2}
      data-cy="header"
      style={{ ...navbarStyles, top: visible ? "0" : "-80px" }}
    >
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
      </Flex>
    </Box>
  );
};

export default Header;
