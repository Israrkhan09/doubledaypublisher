import React from "react";
import "./ContactHero.css";

import google from "../Images/GMB.jpg";
import trustpilot from "../Images/trust-pilot.webp";
import facebook from "../Images/facebook-logo.jpg";

const ContactHero = () => {
  return (
    <section className="contact-hero">

      <div className="contact-overlay"></div>

      <div className="contact-content">
        <h1 className="contact-title">CONTACT US</h1>

        <div className="contact-divider"></div>
        {/* <div className="contact-divider-2"></div> */}

        <p className="contact-description">
          Doubleday Publisher puts customer satisfaction above everything else.
          That is why we are always available at your service. Contact us now
          with your queries to get started.
        </p>

        <div className="contact-logos">
          <img src={google} alt="Google" />
          <img src={trustpilot} alt="Trustpilot" />
          <img src={facebook} alt="Facebook" />
        </div>
      </div>

    </section>
  );
};

export default ContactHero;