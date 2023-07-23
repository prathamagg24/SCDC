import React from 'react'
import "./Car.css"
import s1 from "../../images/Group 52.svg";

function Car() {
  return (
<div className="slider">
	<div className="slide-track">
		<div className="slide">
             <img src={s1} className="test_svg" alt="img"/>
		</div>
		<div className="slide">
             <img src={s1} className="test_svg" alt="img" />
		</div>
		<div className="slide">
             <img src={s1} className="test_svg" alt="img"/>
		</div>
		<div className="slide">
             <img src={s1} className="test_svg" alt="img" />
		</div>
		<div className="slide">
             <img src={s1} className="test_svg" alt="img"/>
		</div>
		<div className="slide">
             <img src={s1} className="test_svg" alt="img"/>
		</div>
		<div className="slide">
             <img src={s1} className="test_svg" alt="img"/>
		</div>
		<div className="slide">
             <img src={s1} className="test_svg" alt="img" />
		</div>

		
	</div>
</div>
  )
}

export default Car