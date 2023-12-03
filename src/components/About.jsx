import React from "react";
import Intro from "/intro.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about__wrapper">
        <h2 className="about__title text-center">About Me </h2>
        <div className="about__info">
          <div className="about__info--img">
            <img src={Intro} alt="about me" />
          </div>
          <div className="about__info--details ">
            <h3 className="about__info--title">
              A passionate web developer based in Kathmandu
            </h3>
            <p>
            With over 1.5 years in the tech industry, I possess impressive skills in HTML, CSS, JavaScript, React, Node, Express, and MongoDB. Dedicated to crafting robust and pristine code, I always emphasize security protocols. My expertise extends to collaborative teamwork, delivering impactful websites and web applications that engage users and drive tangible business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
