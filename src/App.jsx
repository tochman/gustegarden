import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainView from "./components/MainView";
import Adoption from "./components/adoption/Adoption";
import Furs from "./components/commerce/furs/Furs";
import SheepPresentation from "./components/animals/SheepPresentation";
import GoatPresentation from "./components/animals/GoatPresentation";
import SocialPresentation from "./components/commerce/social/SocialPresentation";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainView />} />
        <Route path={"/adoption"} element={<Adoption />} />
        <Route path={"/furs"} element={<Furs />} />
        <Route path={"/sheep"} element={<SheepPresentation />} />
        <Route path={"/goats"} element={<GoatPresentation />} />
        <Route path={"/visit_us"} element={<SocialPresentation />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
