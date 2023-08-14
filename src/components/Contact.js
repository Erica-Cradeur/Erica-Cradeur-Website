import React, {useState} from 'react';
import './Contact.css';

function Contact() {
  const email = 'ericacradeur@gmail.com';
  const subject = encodeURIComponent('New Message from My Website');
  const body = encodeURIComponent('Hello Erica,\n\nI wanted to reach out to you about...');

  const emailLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div id="contacts" class="contacts">
      <div id="contact" className="contact-section">
        <p className="contact-header">Contact Me!</p>
        <p className="contactMe">I am open to new opportunities</p>
        <div className="sendButton">
          <a className="emailLink" href={emailLink}>
            <button className= "send">
            <img className="linkIcon" src={process.env.PUBLIC_URL + './envelope-solid.svg'} alt="Email" />
              <p className="emailText">Email</p>
              <p className="emailAddressText">ericacradeur@gmail.com</p>
              <p className="sendText">Send a Message</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;