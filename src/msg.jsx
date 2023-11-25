import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form">
        <h1>Contact Counselor</h1>
        <form action="submit-contact-form.php" method="post">
          <label for="name">Couple's Names:</label>
          <input type="text" name="name" id="name" placeholder="Enter couple's names" />
          <label for="email">Email Address:</label>
          <input type="email" name="email" id="email" placeholder="Enter email address" />
          <label for="message">Message:</label>
          <textarea name="message" id="message" placeholder="Enter your message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
