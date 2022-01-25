//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let sec = 0;
setInterval(() => {
	sec += 1;
	ReactDOM.render(<Home sec={sec} />, document.querySelector("#app"));
}, 1000);

//render your react application
