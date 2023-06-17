import { Stack, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DesktopMenu = () => {
  const navigate = useNavigate();

  return (
    <Stack direction={"row"} spacing={6}>
      <Link alignSelf={"center"} onClick={() => navigate("/")}>
        Våra Får
      </Link>
      <Link alignSelf={"center"} onClick={() => navigate("/")}>
        Våra Getter
      </Link>
      <Link alignSelf={"center"} onClick={() => navigate("/")}>
        Besök oss
      </Link>
      <Link alignSelf={"center"} onClick={() => navigate("/")}>
        Adoptera ett djur
      </Link>
    </Stack>
  );
};

export default DesktopMenu;
