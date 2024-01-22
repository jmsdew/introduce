
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Ask = () => {
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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="user_message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Ask;