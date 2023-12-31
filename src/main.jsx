import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource-variable/dosis";
import "@fontsource/poppins";
import "@fontsource-variable/caveat";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
// import "@fontsource/poppins/400-italic.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
