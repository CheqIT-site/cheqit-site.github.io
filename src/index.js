import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "bootstrap/dist/css/bootstrap.min.css";

const params = new URLSearchParams(window.location.search);
const redirectPath = params.get("p");

if (redirectPath) {
  const normalizedPath = redirectPath.startsWith("/") ? redirectPath : `/${redirectPath}`;
  window.history.replaceState(null, "", `/Vector/#${normalizedPath}`);
}

ReactDOM.render(<App />, document.getElementById("root"));
