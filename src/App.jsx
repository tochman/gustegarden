import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainView from "./components/MainView";

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path={"/"} element={<MainView />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
