import React from "react";
import "./Home.css";
import img from "../../images/homepage.png";
function Home() {
  return (
    <div className="home">
      <div className="home_left">
        <div className="home_left_h1">Book An</div>
        <div className="home_left_h1">Appointment</div>
        <div className="home_left_desc">
          Suryam provides progressive, and affordable healthcare, accessible on
          mobile and online for everyone
        </div>
        <div className="home_left_btn">Book Now</div>
      </div>
      <div className="home_right">
        <img src={img} className="home_img" />
      </div>
    </div>
  );
}

export default Home;
