
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
import Footer2 from './Footer2';

export const Contact = ({styles}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8lkx8l1', 'template_j60fc5h', form.current, 'KRDaZq1oxyPF-sUaL')
      .then((result) => {
          console.log(result.text);
          alert("전송 완료 되었습니다. 감사합니다.")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
     <>
      <div className='contactMe' style={styles}>
        <div className='contact-photo'>
          <h3>Thank you</h3>
          <h3>Contact me?</h3>
          <img src={require('../image/2.jpg')} className='contact-image'/>
        </div>

        <div className='line3'></div>

        <div className='sendMail'>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label> <br/>
            <input type="text" name="user_name" className='user-name'/><br/>
            <label>Email</label><br/>
            <input type="email" name="user_email" className='user-email'/><br/>
            <label>Message</label><br/>
            <textarea name="user_message" className='user-message'/><br/>
            <input type="submit" value="Send" className='user-button'/>
          </form>
        </div>
      </div>
      <Footer2/>
     </> 

  );
};

export default Contact;