import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainView from "./components/MainView";
import Adoption from "./components/adoption/Adoption";
import Furs from "./components/commerce/furs/Furs";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainView />} />
        <Route path={"/adoption"} element={<Adoption />} />
        <Route path={"/furs"} element={<Furs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
