import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yn6chld', 'template_9afw1b8', form.current, {
        publicKey: '6L4oIvFnj9XiNhYIG',
      })
      .then(
        () => {
          alert('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2><br/>
      <form ref={form} onSubmit={sendEmail}> 
        <div className="mb-3">
          <input type="text" name="from_name" className="form-control" id="name" placeholder='Enter your Name'/>
        </div>
        <div className="mb-3">
          <input type="email" name="from_email" className="form-control" id="email" placeholder='Enter your Email'/>
        </div>
        <div className="mb-3">
          <textarea name="message" className="form-control" id="message" rows="4" placeholder='Message'></textarea>
        </div>
        <button type="submit" className="btn btn-primary" >
          Send Feedback
        </button>
      </form>
    </div>
  );
};

export default ContactUs;