import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Logo from "../elements/Logo";

 const Header = () => {
  return (
    <Box  bg={useColorModeValue('gray.50')}  px={4} data-cy="header">
      <Flex  h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Logo />
        </Box>
      </Flex>
    </Box>
  );
};


export default Header