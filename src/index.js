import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./reset.scss";
import App from "./App";
// import Singlepost from "./Singlepost";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <Singlepost /> */}
    </Router>
  </React.StrictMode>,
  rootElement
);
