import React from 'react'
import '../styles/HomePage.css'
import homePic from "../img/homePic.jpg"
import Elipses from "../components/Elipses.js"

export default function HomePage() {
  return (
    <header className="section-transform hide-section active" id="home">
        <Elipses />
        <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src={homePic} alt=""/>
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    Hi, I'm <span>Clint Patterson. </span>
                    A Web Developer.
                </h1>
                <p>
                    I am a Web Developer from North Alabama. I am passionate about creating beautiful and functional websites!
                </p>
                <div className="btn-con">
                    <a href="chp-resume.docx" download className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}
