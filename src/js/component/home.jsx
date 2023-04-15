import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Nav from "./nav.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Nav/>
			<Jumbotron/>
			<div className="d-flex justify-content-lg-around mx-lg-5">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
