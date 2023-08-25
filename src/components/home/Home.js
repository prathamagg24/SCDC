import React from "react";
import "./Home.css";
import img from "../../images/homepage.png";
function Home() {
	return (
		<div className="home">
			<div className="home_left">
				<div className="home_left_h1">Book An Appointment</div>
				<div className="home_left_desc">
					Suryam provides progressive, effective, and affordable healthcare, accessible on your
					mobile and online for everyone. Easy and portable access to all the facilities. An all-round place for Child Development and much more.
				</div>
				<div className="home_left_btn">Book Now</div>
			</div>
			<div className="home_right">
				<img src={img} className="home_img" alt="Healthcare" />
			</div>
		</div>



	);
}

export default Home;
