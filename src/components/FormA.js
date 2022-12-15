import React from 'react'
import '../styles/FormA.css'

export default function FormA() {
  return (
    <section className="section-transform hide-section contact active" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>Contact <span>Me</span><span className="bg-text">Contact Me</span></h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <div className="contact-info">
              <div className='contact-item'>
                <div className='icon'>
                  <i className="fas fa-map-marker-alt"></i>
                  Location
                </div>
              </div>
            </div>

          </div>

          <div className="right-contact">
          </div>
        </div>
      </div>     
    </section>
  )
}
