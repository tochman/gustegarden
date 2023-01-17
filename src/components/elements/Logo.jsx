import { Image } from "@chakra-ui/react";
import logo from "../../assets/gustegarden_small.svg";

const Logo = (props) => {
  return (
    <Image
      htmlWidth={props.width || "210px"}
      htmlHeight={"auto"}
      src={logo}
      m={1}
      {...props}
    />
  );
};

export default Logo;
