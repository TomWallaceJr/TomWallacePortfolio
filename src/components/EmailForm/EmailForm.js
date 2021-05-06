import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './EmailForm.css';

export default function EmailForm() {
  const [state, handleSubmit] = useForm('xwkavzqd');
  if (state.succeeded) {
    return <p>Thanks for the email! I'll get back to you ASAP!</p>;
  }
  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" className="messagebox" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
