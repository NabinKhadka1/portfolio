import React, { useContext } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { contextApi } from "../context";

const Portfolio = () => {
  const { projects, handleSubmitData, datas } = useContext(contextApi);
  const showActiveReact = datas === "react" ? "btn active" : "btn";
  const showActiveFrontend = datas === "frontend" ? "btn active" : "btn";
  const showActiveFullstack = datas === "fullstack" ? "btn active" : "btn";

  return (
    <section className="portfolio" id="portfolio">
      <div className="container portfolio__wrapper">
        <h2 className="portfolio__title text-center">Portfolio</h2>
        <div className="projects">
          <div className="projects__tabs">
            <button
              className={showActiveFrontend}
              onClick={() => handleSubmitData("frontend")}
            >
              HTML & CSS
            </button>
            <button
              className={showActiveReact}
              onClick={() => handleSubmitData("react")}
            >
              React
            </button>
            <button
              className={showActiveFullstack}
              onClick={() => handleSubmitData("fullstack")}
            >
              Fullstack
            </button>
          </div>
          <div className="projects__items">
            {projects.map((project) => {
              const { _id, desc, image, languages, title, code, demo } =
                project;
              return (
                <article className="article" key={_id}>
                  <div className="img__container">
                    <img src={image} alt={title} />
                  </div>
                  <div className="article__content">
                    <h3>
                      {title}
                      {project.titleLogo && project.titleLogo}
                    </h3>
                    <p>{desc}</p>
                    <div className="article__tabs">
                      {languages.map((lang, index) => (
                        <span key={index}>{lang}</span>
                      ))}
                    </div>
                    <div className="article__source">
                      <a href={code} target="_blank">
                        Code
                        <span>
                          <FaGithub />
                        </span>
                      </a>
                      <a href={demo} target="_blank">
                        Demo
                        <span>
                          <FaExternalLinkAlt />
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
