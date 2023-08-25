import React from 'react'
import "./Card.css"
import svg1 from "../../images/Group 26.svg"
function Card() {
	return (
		<div className="card_service">
			<img src={svg1} className="svgicon" />
			<div className="card_service_head">UI/UX Design</div>
			<div className="card_service_body">
				Our focus is on crafting intuitive and beautiful user experiences across all digital mediums. Whether it's a website, app, or product.
			</div>
			<div className="card_service_btn">Contact Us</div>
		</div>
	)
}

export default Card