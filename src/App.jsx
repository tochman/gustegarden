import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainView from "./components/MainView";

const App = () => {
  return (
    <>
      <Header />
      <Container maxW={'100%'} marginTop="20px">
        <Routes>
          <Route path={"/"} element={<MainView />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;
