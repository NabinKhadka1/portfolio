import {
  FaShoppingCart
} from "react-icons/fa";
import Ecommerce from "/ecommerce-platform.png";
import LearningPlatform from "/learning-platform.png";
import IOCR from "/iocr.png"
import EPAATH from "/epaath.png"
import OLEWebsite from "/olewebsite.png"
import FinanceTracker from "/finance-tracker.png"

export const projects = [
  {
    _id: 1,
    image: LearningPlatform, 
    title: "OLE Learning Platform",
    desc: "Ed-tech platform serving thousands of learners with documents, audio, video, curated courses, games, and interactive stories — delivered in 5+ languages.",
    languages: ["Nextjs", "TypeScript", "Django"],
    code: "",
    demo: "https://learning.olenepal.org",
    projectType: "production",
  },
  {
    _id: 2,
    image: IOCR, 
    title: "IOCR Platform",
    desc: "OCR platform that transforms images into structured digital content — extract and clean text, convert between document formats, and split multi-page scans.",
    languages: ["React", "TypeScript", "a11y"],
    code: "",
    demo: "https://iocr.olenepal.org",
    projectType: "production",
  },
  {
    _id: 3,
    image: EPAATH, 
    title: "ePaath",
    desc: "Interactive digital learning modules for primary education. Built engaging, performant UI interactions with a focus on cross-device compatibility and smooth user experience.",
    languages: ["JavaScript","SVG Animation"],
    code: "",
    demo: "https://epaath.olenepal.org",
    projectType: "production",
  },
  {
    _id: 4,
    image: OLEWebsite, 
    title: "OLE Website",
    desc: "Website for OLE Nepal — an NGO that has impacted 400,000+ students across Nepal through digital learning, teacher training, and school infrastructure since 2007.",
    languages: ["Django", "PostgreSQL"],
    code: "",
    demo: "https://olenepal.org",
    projectType: "production",
  },
  {
    _id: 5,
    image: FinanceTracker, 
    title: "Finance Tracker",
    desc: "Full-stack personal finance app with expense tracking, budgeting, and analytics. Server-rendered frontend with Next.js and a Django REST Framework backend.",
    languages: ["Next.js", "Django", "PostgreSQL"],
    code: "", 
    demo: "",
    projectType: "personal",
  },
  {
    _id: 1017,
    image: Ecommerce,
    title: "Ecommerce",
    desc: "Full-stack e-commerce platform with cart, authentication, order management, product search, admin dashboard, and shipping — built end-to-end.",
    languages: ["React", "Node", "MongoDB"],
    code: "",
    demo: "https://youtu.be/50-w0JZQA4k",
    titleLogo: <FaShoppingCart />,
    projectType: "fullstack",
  }
];

export const navLinks = [
  { id: "home", href: "#hero", label: "Home" },
  { id: "about", href: "#about", label: "About" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "contact", href: "#contact", label: "Contact" },
];
