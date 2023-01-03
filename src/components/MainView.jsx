import HeroSection from "./elements/HeroSection";
import MissionSection from "./elements/MissionSection";

import { Helmet } from "react-helmet";
import CaptionCarousel from "./elements/CaptionCarousel";

const MainView = () => {
  return (
    <>
      <Helmet>
        <title>Gustegården - Småskalig jordbruk</title>
      </Helmet>
      <CaptionCarousel />
      <MissionSection />
    </>
  );
};

export default MainView;
