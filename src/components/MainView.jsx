import HeroSection from "./elements/HeroSection";
import MissionSection from "./elements/MissionSection";
import { Helmet } from "react-helmet";

const MainView = () => {
  return (
    <>
      <Helmet>
        <title>Gustegården - Småskalig jordbruk</title>
      </Helmet>
      <HeroSection />
      <MissionSection />
    </>
  );
};

export default MainView;
