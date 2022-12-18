import { Image, useColorModeValue } from "@chakra-ui/react";
import logo from "../../assets/gustegarden_small.svg";

const Logo = () => {
  return (
    <Image
      htmlWidth={"210px"}
      htmlHeight={"50px"}
      src={logo}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Logo;
