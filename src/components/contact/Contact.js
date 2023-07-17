import React from "react";
import "./Contact.css";
import img from "./contact.jpg";
function Contact() {
  return (
    <div>
<div className="contact-text">
<div className="contact_head ">CONTACT US</div>
<div className="contact-subheading">Feel free to connect in case of queries</div>
</div>
    <div className="contact">
      <form action="https://submit-form.com/HZEivwMc">
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Name"
          required=""
        />

        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Email"
          required=""
        />

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required=""
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <img src={img} className="form_img" />
    </div>
    </div>
  );
}

export default Contact;
