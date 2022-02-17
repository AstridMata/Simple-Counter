import React from "react";
import Card from "./Card.jsx";

//create your first component
const Home = (props) => {
	return (
		<div>
			<div className="container bg-counter">
				<div className="row">
					<div className="col counter icono">
						<i className="far fa-clock"></i>
					</div>
					<div className="col counter">{props.digitFour}</div>
					<div className="col counter">{props.digitThree}</div>
					<div className="col counter">{props.digitTwo}</div>
					<div className="col counter">{props.digitOne}</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
