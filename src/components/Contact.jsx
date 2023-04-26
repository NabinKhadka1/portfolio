import React, { useContext } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { contextApi } from "../context";

const Contact = () => {
  const { email, setEmail } = useContext(contextApi);
  const emailSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Inside handler", email);
  };
  console.log(email);
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
          <form className="form">
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" onSubmit={(e) => emailSubmitHandler(e)}>
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
