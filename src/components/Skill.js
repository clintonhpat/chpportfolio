import "../styles/Skill.css"
import VanillaTilt from "../components/vanilla-tilt.js"
import { useEffect } from 'react';


export default function Skill(props) {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".skillContainer"), {
            max: 25,
            speed: 400
        });
    }, []);


  return (
    <div className="skillContainer">        
        <div className="column column1">
            <h3>{props.header}</h3>
            <div className="skillContentContainer">
                <div className="list"><li>{props.icon}<br></br>{props.content}</li></div>
                <div className="list"><li>{props.icon2}<br></br>{props.content2}</li></div>
                <div className="list"><li>{props.icon3}<br></br>{props.content3}</li></div>
                <div className="list"><li>{props.icon4}<br></br>{props.content4}</li></div>
                <div className="list"><li>{props.icon5}<br></br>{props.content5}</li></div>
                <div className="list"><li>{props.icon6}<br></br>{props.content6}</li></div>
            </div>
        </div>        
    </div>
  )
}