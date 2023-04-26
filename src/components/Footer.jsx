import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="container footer__wrapper">
        <h3> Copyright &copy; 2023. All rights reserved </h3>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/khadka-nabin" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/NabinKhadka1" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
