import React from 'react';
import EmailForm from '../EmailForm/EmailForm';
import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-page-main">
      <h1 className="contact-page-title">Contact Me</h1>
      <p className="contact-page-p">
        I am currently seeking employment and looking for freelance work. If you
        are interested in scheduling a consultation with me please contact me
        via the form below and I will get back to you ASAP.
      </p>
      <p className="contact-page-p">
        You can also connect with me on social media via the links below.
      </p>
      <EmailForm />
    </main>
  );
}
