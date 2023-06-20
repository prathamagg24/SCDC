import React from "react";
import "./Team.css";
import img from "./images/pranav.jpeg";
function Team() {
  return (
    <div className="team">
      <div className="team_head">Meet Our Team</div>
      <div className="team_grid">
        <div className="card_team">
          <img src={img} className="img_team" />

          <div className="card_team_h">Pranav Chauhan</div>
          <div className="card_team_d">Dentist</div>
        </div>
        <div className="card_team">
          <img src={img} className="img_team" />

          <div className="card_team_h">Pranav Chauhan</div>
          <div className="card_team_d">Dentist</div>
        </div>
      </div>
    </div>
  );
}

export default Team;
