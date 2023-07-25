import React, { useEffect } from "react";
import "./footer.css";
import SocialFollow from "./social";
import mapImage from "./mapImage.jpg"

import im from "../../images/scdclogo.png"
function Footer() {

  return (
    <footer>
      <div className="row-footer" id="footer">
        <div className="col">
          <div className="logos_wrap">
            <div>

              <img
                src={im}
                className="logo_scdc"
                alt="Logo"
              ></img>
            </div>
          </div>
          <div className="footer-text">
            A 24-hour Software Hackathon with themes like IoT,
            Blockchain/Fintech, AR/VR, Edtech, Healthcare, Assistive technology
            and much more. IEEE NSUT’s annual Technical Extravaganza HackNSUT’22
            for its next edition, is organised this time under the aegis of
            Moksha-Innovision 22, the annual cultural and technical fest of
            Netaji Subhas University of Technology.
          </div>
          <div className="social">
            <SocialFollow />
          </div>
        </div>
        <div className="col brd">
          <h3 className="footerhead" style={{marginTop:"10px"}}>
            Address
          
          </h3>
          <div className="footer-address">
          <div>Suryam Child Development Clinic</div>
          <br></br>
          <div>Main Market, E-28, Hauz khas Market, Kharera, Hauz Khas</div>
          <div>New Delhi - 110016</div>
          </div>

         
        </div>
      
        <div className="col col-sponsor">
        
         
          <div style={{ marginTop: "00px" }}>
            <div className="insu">
            Interested in sponsoring us?
              </div>
              <a
              href="https://maps.app.goo.gl/HN6xwvSm2bRgEiw66"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="map-box">
                <img
                  src={mapImage}
                  alt="Map"
                  className="map-image"
                />
              </div>
            </a>
         
          </div>

        </div>
      </div>
      <hr></hr>

    <a href={"https://devfolio.co/code-of-conduct"} target={"_blank"} style={{textDecoration:"none",color:"white"}}>
     <p className="copyright">Code of Conduct</p>  </a> 
      <p className="copyright">HackNSUT © 2023 - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
