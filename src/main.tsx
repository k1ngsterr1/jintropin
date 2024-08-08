import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./input.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import ReferenceContext from "@shared/lib/contexts/context.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReferenceContext>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ReferenceContext>
    </Provider>
  </React.StrictMode>
);
