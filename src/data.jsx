import Jadoo from "/jadoo1.png";
import skilline from "/skilline1.png";
import News from "/news.png";
import GithubInfo from "/githubInfo.png";
import Cocktail from "/cocktail.png";
import Gallery from "/gallery.png";
import Ecommerce from "/ecommerce.png";
import { ImAirplane } from "react-icons/im";
import {
  FaGraduationCap,
  FaCocktail,
  FaNewspaper,
  FaShoppingCart,
} from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import { TfiGallery } from "react-icons/tfi";
export const data = [
  {
    _id: 1011,
    image: Jadoo,
    title: "Jadoo",
    desc: "Jadoo is an online platform that allows users to book tickets. Converted figma design to code.",
    languages: ["HTML & CSS", "JavaScript"],
    code: "https://github.com/NabinKhadka1/Jadoo",
    demo: "https://frontend-jadoo.netlify.app/",
    titleLogo: <ImAirplane />,
    projectType: "frontend",
  },
  {
    _id: 1012,
    image: skilline,
    title: "Skilline",
    desc: "Skilline makes study much easier.Converted figma design to code",
    languages: ["HTML & CSS", "JavaScript"],
    code: "https://github.com/NabinKhadka1/lft-assignment/tree/master/assignment/Design-Assignment-06:Skilline",
    demo: "https://nabinkhadka1.github.io/lft-assignment/assignment/Design-Assignment-06:Skilline/index.html",
    titleLogo: <FaGraduationCap />,
    projectType: "frontend",
  },
  {
    _id: 1013,
    image: GithubInfo,
    title: "Github Info",
    desc: "Search github information.Uses github api to fetch github users, fusion charts to display data and auth0 for authentication. ",
    languages: ["React"],
    code: "https://github.com/NabinKhadka1/GithubInfo",
    demo: "https://react-search-github-info.netlify.app/",
    titleLogo: <SlSocialGithub />,
    projectType: "react",
  },
  {
    _id: 1014,
    image: Cocktail,
    title: "Cocktail",
    desc: "Search your favourite cocktail and find the details.Used cocktaildb to fetch data and react-router-dom to view cocktail details. ",
    languages: ["React"],
    code: "https://github.com/NabinKhadka1/CocktailApp",
    demo: "https://react-searchcocktail.netlify.app/",
    titleLogo: <FaCocktail />,
    projectType: "react",
  },
  {
    _id: 1015,
    image: News,
    title: "News",
    desc: "Search your favourite news and read its detail. Used angola news api and implemented pagination features",
    languages: ["React"],
    code: "https://github.com/NabinKhadka1/news",
    demo: "https://react-searchnews.netlify.app/",
    titleLogo: <FaNewspaper />,
    projectType: "react",
  },
  {
    _id: 1016,
    image: Gallery,
    title: "Image Gallery",
    desc: "Allows you to search and scroll through unlimited results.Curated to implement unsplash like website using unsplash api enforcing lazy loading",
    languages: ["React"],
    code: "https://github.com/NabinKhadka1/ImageGallery",
    demo: "https://react-galleryimages.netlify.app/",
    titleLogo: <TfiGallery />,
    projectType: "react",
  },
  {
    _id: 1017,
    image: Ecommerce,
    title: "Ecommerce",
    desc: "Surf through a huge collection of items. Implemented cart, authentication, authorization, products, orders, shipping, admin, search and much more",
    languages: ["React", "Node", "MongoDB"],
    code: "",
    demo: "",
    titleLogo: <FaShoppingCart />,
    projectType: "fullstack",
  },
];
