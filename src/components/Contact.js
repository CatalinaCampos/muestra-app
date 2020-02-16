import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        {/* <h4 className="title-contact">CONTACT US</h4> */}
        <div className="contact">
          <div className="contact-form">
            <h4>Reach out to us!</h4>
            <p>
              Got a question? Are you interested in work with us? Have some
              suggestions or just want to say hi? Contact us:
            </p>
            <div className="contact-input">
              <input placeholder="First name"></input>
              <input placeholder="Last name"></input>
              <input placeholder="Your email address"></input>
              <input placeholder="Phone number"></input>
              <input className="message-input" placeholder="Message"></input>
            </div>
            <Button className="submit">Submit</Button>
          </div>
          <div className="contact-options">
            <h4>Other ways to connect</h4>
            <p>
              Not sure where to start? Need help adding that extra mojo to your
              landing page? Get in touch with us:
            </p>
            <div className="contact-info">
              <p>
                <FiPhone className="icon" /> +569 99999999
              </p>

              <p>
                <FiMail className="icon" /> example@gmail.com
              </p>

              <p>
                <FiMapPin className="icon" /> Santiago de Chile
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
