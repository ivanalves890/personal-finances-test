import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bulma/css/bulma.min.css";
import "./index.css";
import "../node_modules/bulma-calendar/dist/css/bulma-calendar.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
