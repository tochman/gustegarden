import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CookieConsentProvider } from '@use-cookie-consent/react'
import './index.css'

window.store = store;
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <Provider store={store}>
      <CookieConsentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CookieConsentProvider>
    </Provider>
  </ChakraProvider>
  // </React.StrictMode>,
);
