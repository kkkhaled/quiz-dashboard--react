import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/routes";
import store from "./store/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./localize/localize";
import "./main.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
