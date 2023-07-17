import React from "react";
import "./Contact.css";
import img from "./contact.jpg";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
  // Add your Firebase project configuration here
  apiKey: "AIzaSyANLTob_x3b_GsIHjrPWzYkxiJh_o11FdA",
  authDomain: "scdc-a24d7.firebaseapp.com",
  projectId: "scdc-a24d7",
  storageBucket: "scdc-a24d7.appspot.com",
  messagingSenderId: "916394537213",
  appId: "1:916394537213:web:03caafcf451e7eaac7ce94",
  measurementId: "G-D6J6RH1ZV2"
};

initializeApp(firebaseConfig);
const db = getDatabase();

function Contact() {

  
    const handleSubmit =  (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
  
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      try {
          push(ref(db, 'contacts'), {
          name,
          email,
          message,
        });
  
        // Form submission successful, handle any success actions here
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div>
<div className="contact-text">
<div className="contact_head ">CONTACT US</div>
<div className="contact-subheading">Feel free to connect in case of queries</div>
</div>
    <div className="contact">
      <form onSubmit={handleSubmit}>
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
