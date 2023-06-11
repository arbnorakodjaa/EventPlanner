import React from "react";
import Flowers from "../assets/bg-02.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Flowers})` }}
      ></div>
      <div className="rightSide">
        <h1> Na Kontaktoni</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Emri dhe mbiemri</label>
          <input name="name" placeholder="Emri dhe mbiemri..." type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="E-mail..." type="email" />
          <label htmlFor="message">Mesazhi</label>
          <textarea
            rows="6"
            placeholder="Mesazhi..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Dergo</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
