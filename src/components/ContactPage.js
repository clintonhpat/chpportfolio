import React from 'react'
import FormInput from './FormInput'
import "../styles/ContactPage.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function GForm(props) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jn87nd8', 'template_pr1xvqb', form.current, 'ixpAqDXWePw2WT05K')
      .then(
        (result) => {
          alert("The Form has been Submitted.")
          console.log(result.text);
        }, 
        (error) => {
          alert("All fields are required!")
          console.log(error.text);
        }
      );
  };

  return (
    <section className="section-transform hide-section contact active" id="contact">
      
      <div className="main-title">
        <h2>Contact <span>Me</span><div className="bg-text">Contact Me</div></h2>
      </div>

      <div className="contact-container">
        <div className="contact-content-con">
          <h4>Contact me here</h4>

          <form className="form-container" ref={form} onSubmit={sendEmail} >
            <div className="contact-input-control name-email-con">
            <FormInput inputType='text' name='user_name' placeholder='YOUR NAME' required />
            <FormInput inputType='email' name='user_email' placeholder='YOUR EMAIL' required />
            </div>

            <div className="contact-input-control">
            <FormInput inputType='text' name='subject' placeholder='ENTER SUBJECT' autocomplete="off" required />
            </div>

            <div className="contact-input-control input-message">
            <FormInput inputType='text' name='message' placeholder="Message Here..." autocomplete="off" required />
            </div>

          <div className="submit-btn-con">
            <div onClick={sendEmail} type='submit' className="submit-btn --btn --btn-primary">
              <span className="btn-text">SEND</span>
              <span className="btn-icon"><i className="fas fa-download"></i></span>
            </div>
          </div>
          </form>

        </div>
      </div>
    </section>
  )
}