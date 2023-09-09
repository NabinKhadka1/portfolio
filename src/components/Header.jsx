import React, { useContext } from "react";
import Ham from "/hamburger.svg";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb} from "react-icons/si";
import { contextApi } from "../context";
// import Nabin from "/nabinkhadka.png";
import Nabin from '/nabin.jpg';

const Header = () => {
  const { openSidebar } = useContext(contextApi);
  return (
    <header className="header" id="home">
      <nav className="navbar">
        <div className="navbar__center">
          <div className="navbar__brand">
            <a href="#home" className="logo">
              nabin.dev
            </a>
          </div>
          <ul className="nav__menu">
            <li className="nav__list">
              <a href="#home">Home</a>
            </li>
            <li className="nav__list">
              <a href="#about">About</a>
            </li>
            <li className="nav__list">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav__list">
              <a href="#contact">Contact</a>
            </li>
            <li className="nav__list">
              <a href="#footer">Footer</a>
            </li>
          </ul>
          <button className="nav__img" onClick={openSidebar}>
            <img src={Ham} alt="Hamburger menu" />
          </button>
        </div>
      </nav>
      <div className="hero" id="hero">
        <div className="container hero__wrapper">
          <div className="hero__info">
            <h1 className="text-center">Fullstack Web Developer</h1>
            <span className="hero__emoji">😎</span>
            <p className="text-center">
              Hi, I'm <span>Nabin.</span> I build and maintain web applications
            </p>
            <div className="hero__skills">
              <p className="hero__skills--title">Tech Stacks</p>
              <div className="hero__skills--logos">
                <span>
                  <FaHtml5 className="color__html" />
                </span>
                <span>
                  <FaCss3Alt className="color__css" />
                </span>
                <span>
                  <SiJavascript className="color__js" />
                </span>
                <span>
                  <FaReact className="color__react" />
                </span>
                <span>
                  <FaNodeJs className="color__node" />
                </span>
                <span>
                  <SiMongodb className="color__mongo" />
                </span>
              </div>
            </div>
          </div>
          <div className="hero__img">
            <img src={Nabin} alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
