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
              I'm a junior developer trying to start my career in the tech
              industry. I posses impressive skills in HTML, CSS, JavaScript,
              React, Node, Express and MongoDB. I'm proficient in
              several programming language,frameworks and databases. I'm always
              looking for an opportunity to learn and grow as a developer, and I
              believe that my collaboration and skills would make me an asset to
              any team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
