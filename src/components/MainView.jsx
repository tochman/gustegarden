import { useSelector } from "react-redux";
import HeroSection from "./elements/HeroSection";
import MissionSection from "./elements/MissionSection";

HeroSection;

const MainView = () => {
  const { title } = useSelector((state) => state.application);
  return (
    <>
      <HeroSection />
      <MissionSection />
    </>
  );
};

export default MainView;
