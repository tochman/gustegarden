import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import Logo from "../elements/Logo";

const Header = () => {
  return (
    // <Box bg={useColorModeValue("gray.50")} px={4} data-cy="header">
    //   <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
    //     <Box>
    //       <Logo />
    //     </Box>
    //   </Flex>
    // </Box>
    <Box py={2} data-cy="header">
    <Flex
      align={'center'}
      _before={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        flexGrow: 1,
        mr: 8,
      }}
      _after={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        flexGrow: 1,
        ml: 8,
      }}>
      <Logo />
    </Flex>

  </Box>
  );
};

export default Header;
