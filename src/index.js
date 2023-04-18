import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import { ParallaxProvider } from "react-scroll-parallax";

import { I18nextProvider } from "react-i18next";

i18next.init({
  lng: localStorage.getItem("lng") || "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { global: global_en },
    es: { global: global_es },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <ParallaxProvider>  
    <I18nextProvider i18n={i18next}>
  <App />

    </I18nextProvider>
    </ParallaxProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
