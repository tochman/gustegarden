import HeroSection from "./elements/HeroSection";
import MissionSection from "./elements/MissionSection";

import { Helmet } from "react-helmet";
import CaptionCarousel from "./elements/CaptionCarousel";
import CallsToAction from "./elements/CallsToAction";


const MainView = () => {
  return (
    <>
      <Helmet>
        <title>Gustegården - Småskalig jordbruk</title>
      </Helmet>
      <CaptionCarousel />
      <CallsToAction />
      <MissionSection />
    </>
  );
};

export default MainView;
