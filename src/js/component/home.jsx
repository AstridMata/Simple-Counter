import React from "react";
import Card from "./Card.jsx";

//create your first component
const Home = (props) => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col">{props.digitOne}</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
