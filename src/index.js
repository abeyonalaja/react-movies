import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const MOUNT = document.getElementById("root");
const renderApp = Comp => ReactDOM.render(Comp, MOUNT);

if (module.hot) {
  module.hot.accept("./App", () => {
    // accept hot change request
    const NextApp = require("./App").default;
    renderApp(<NextApp />);
  });
}
renderApp(<App />);
