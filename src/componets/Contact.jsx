import React from "react";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

import "./contact.css";
const Contact = () => {
  return (
    <div>
      <div className="mainbackgroundcontact">
        <div className="main-heading-contact">
          <h1>contact Us</h1>
        </div>
      </div>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="card">
          <FaEnvelope size={50} color="#007bff" />
          <h2>Email</h2>
          <p>
            <a href="mailto:singhaniyaofficail@gmail.com">
              singhaniyaofficail@gmail.com
            </a>
          </p>
        </div>
        <div className="card">
          <FaWhatsapp size={50} color="#25D366" />
          <h2>WhatsApp</h2>
          <p>
            <a href="https://wa.me/8168235174">Click to message on WhatsApp</a>
          </p>
        </div>
        <div className="card">
          <FaMapMarkerAlt size={50} color="#FF0000" />
       

          <p>
            No. G 4 & 5, Ground Floor, No.12 Richmond Road, Bangalore - 560025
            Near HDFC Bank & Petrol Bunk
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
