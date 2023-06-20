import React from "react";
import Card from "../cards/Card";
import "./Services.css";
import ser1 from "../../images/ser1.png";
import ser2 from "../../images/ser2.png";
import ser3 from "../../images/ser3.png";
import ser4 from "../../images/ser4.png";
import ser5 from "../../images/ser5.png";
import ser6 from "../../images/ser6.png";
function Services() {
  return (
    <div className="services">
      <div className="font_wgt_wrap">
        <div className="ser_head">Our Services</div>
      </div>
      <div className="ser_desc">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </div>
      <div className="ser_cards">
        <div className="card_service">
          <img src={ser1} className="svgicon" />
          <div className="card_service_head">Search doctor</div>
          <div className="card_service_body">
          Choose your doctor from thousands of specialist, general, and trusted hospitals
          </div>
          
        </div>
        <div className="card_service">
          <img src={ser2} className="svgicon" />
          <div className="card_service_head">Online pharmacy</div>
          <div className="card_service_body">
          Buy  your medicines with our mobile application with a simple delivery system
          </div>
          
        </div>
        <div className="card_service">
          <img src={ser3} className="svgicon" />
          <div className="card_service_head">Consultation</div>
          <div className="card_service_body">
          Free consultation with our trusted doctors and get the best recomendations
          </div>
          
        </div>
        <div className="card_service">
          <img src={ser4} className="svgicon" />
          <div className="card_service_head">Details info</div>
          <div className="card_service_body">
          Free consultation with our trusted doctors and get the best recomendations
          </div>
          
        </div>
        <div className="card_service">
          <img src={ser5} className="svgicon" />
          <div className="card_service_head">Emergency care</div>
          <div className="card_service_body">
          You can get 24/7 urgent care for yourself or your children and your
lovely family
          </div>
          
        </div>
        <div className="card_service">
          <img src={ser6} className="svgicon" />
          <div className="card_service_head">Tracking</div>
          <div className="card_service_body">
          Track and save your medical history and health data 
          </div>
          
        </div>

      </div>
      <div className="ser_btn">
        Learn more
      </div>
    </div>
  );
}

export default Services;
