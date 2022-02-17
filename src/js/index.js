//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Card from "./component/Card.jsx";

let sec = 0;
setInterval(() => {
	const four = Math.floor((sec / 1000) % 10);
	const three = Math.floor((sec / 100) % 10);
	const two = Math.floor((sec / 10) % 10);
	const one = Math.floor((sec / 1) % 10);
	console.log(four, three, two, one);

	sec += 1;
	ReactDOM.render(
		<Home
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
