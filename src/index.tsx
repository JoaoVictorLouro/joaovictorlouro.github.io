import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "aos/dist/aos.css";
import * as serviceWorker from "./serviceWorker"; // You can also use <link> for styles

const AOS = require("aos");

AOS.init();
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
