import {
  FaNewspaper,
  FaShoppingCart
} from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import Ecommerce from "/ecommerce.png";
import GithubInfo from "/githubInfo.png";
import News from "/news.png";
export const projects = [
  {
    _id: 1017,
    image: Ecommerce,
    title: "Ecommerce",
    desc: "Surf through a huge collection of items. Implemented cart, authentication, authorization, products, orders, shipping, admin, search and much more",
    languages: ["React", "Node", "MongoDB"],
    code: "",
    demo: "https://youtu.be/50-w0JZQA4k",
    titleLogo: <FaShoppingCart />,
    projectType: "fullstack",
  },
  {
    _id: 1013,
    image: GithubInfo,
    title: "Github Info",
    desc: "Search github information.Uses github api to fetch github users, fusion charts to display data and auth0 for authentication. ",
    languages: ["React","Github API"],
    code: "https://github.com/NabinKhadka1/GithubInfo",
    demo: "https://react-search-github-info.netlify.app/",
    titleLogo: <SlSocialGithub />,
    projectType: "react",
  },
  {
    _id: 1015,
    image: News,
    title: "News",
    desc: "Search your favourite news and read its detail. Used angola news api and implemented pagination features",
    languages: ["React", "Angola API"],
    code: "https://github.com/NabinKhadka1/news",
    demo: "https://react-searchnews.netlify.app/",
    titleLogo: <FaNewspaper />,
    projectType: "react",
  },
];

export const navLinks = [
  { id: "home", href: "#hero", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "contact", href: "#contact", label: "Contact" },
];
