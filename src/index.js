import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorChanger from './components/Content/ColorChanger/ColorChanger'

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <ColorChanger/>
    </Router>
  </React.StrictMode>
);
