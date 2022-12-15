import "../styles/Card.css"
import VanillaTilt from "../components/vanilla-tilt.js"
import { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa'
import { RiLiveLine } from 'react-icons/ri'


export default function Card(props) {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".cardContainer"), {
            max: 25,
            speed: 400
        });
    }, []);


  return (
    <div className="cardContainer">
        <div className="columnContainer">
            <div className="column column1">
                <h3>{props.header}</h3>
                <div className="paragraphContainer">
                <p>{props.content}</p>
                </div>
                <div className="buttonsContainer">
                    <div className="button button1">
                    <a href={props.link1} className="button-git" target="_blank" rel="noopener noreferrer">GIT <FaGithub /></a>
                    </div>
                    <div className="button button2">
                    <a href={props.link2} className="button-live" target="_blank" rel="noopener noreferrer">LIVE <RiLiveLine className="card-button" /></a>
                    </div>
                </div>
            </div>
        
            <div className="column column2">
                <h2>0{props.cardNum}</h2>
                <div><img src={props.image} alt="unavailable, sry"/></div>
            </div>
        </div>
    </div>
  )
}