import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Router } from "react-router-dom";
import history from "./helpers/history";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
ReactDOM.render(
  <Router history={history} forceRefresh>
    <App />
  </Router>,
  document.getElementById("root")
);
