import { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {

  const mailtoHref = `mailto:nabinkhadka330@gmail.com?subject=${encodeURIComponent(
    "Opportunity"
  )}&body=${encodeURIComponent(
    "Hi Nabin,\n\nI saw your portfolio and would like to discuss..."
  )}`;

  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper container">
        <h2 className="contact__title text-center">Contact Me </h2>
        <div className="contact__info">
          <div className="contact__details">
            <h3 className="contact__details--title">Personal Info</h3>
            <div className="contact__details--personal">
              <p>
                <MdEmail className="contact__logo" />
                <span>nabinkhadka330@gmail.com</span>
              </p>
              <p>
                <MdPhone className="contact__logo" />
                <span>+977 9861547326</span>
              </p>
              <p>
                <FaAddressCard className="contact__logo" />
                <span>Basundhara, Kathmandu</span>
              </p>
            </div>
          </div>

          <aside
            className="contact__mail--card"
            aria-label="contact quick actions"
          >
            <div
              className="contact__mail--content"
            >
              <h3>Let’s build something together</h3>
              <p >
                Open to frontend & fullstack roles — prefer email. Quick actions
                below.
              </p>

              <div
                className="contact__mail--action"
              >
                <a
                  href={mailtoHref}
                  className="btn"
                  aria-label="Open mail client"
                >
                  Email me
                </a>
              </div>

              <div
                className="contact__mail--availability"
              >
                <div
                  className="contact__mail--item"
                >
                  <div className="contact__mail--text">Availability</div>
                  <div>Usually replies within 48 hours</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
