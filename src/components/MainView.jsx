import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import HeroSection from "./elements/HeroSection";
HeroSection

const MainView = () => {
  const { title } = useSelector((state) => state.application);
  return <HeroSection />;
};

export default MainView;