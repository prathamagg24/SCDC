import React from "react";
import "./Contact.css";
import img from "./contact.jpg";
function Contact() {
  return (
    <>
<div className="contact_head ">Contact Us</div>
    <div className="contact">
      <form action="https://submit-form.com/HZEivwMc">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required=""
        />

        <input
          type="email"
          id="email"
          name="email"
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
    </>
  );
}

export default Contact;
