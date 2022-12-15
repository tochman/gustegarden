import React from "react";
import { Route, Routes } from "react-router-dom";
import MainView from "./components/MainView";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainView />} />
    </Routes>
  );
};

export default App;
