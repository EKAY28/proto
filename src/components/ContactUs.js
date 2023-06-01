import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kwqskib', 'template_xni7j8d', form.current, '97aNFiJAnX65GnyGi')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
          setFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
          alert('Error sending message.');
      });
  };

  return (
    <div className="container">
      {!formSubmitted ? (
        <div>
          <h1>Contact Us</h1>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="to_name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="from_name" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} name="message" placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </div>
      ) : (
        <div>
          <h1>Thank you for contacting us!</h1>
        </div>
      )}
    </div>
  );
};

export default ContactUs;