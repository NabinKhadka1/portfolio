import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import Nabin from "/nabin.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className=" px-4 pt-8 pb-12 md:px-8 lg:px-20 xl:px-0 bg-primary-50 dark:bg-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 dark:text-white leading-tight">
                Fullstack
                <span className="text-primary-600 dark:text-primary-400">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I create scalable, performant, and accessible web applications
                with React, Next.js and TypeScript. I build resilient frontend
                systems and lead teams to deliver high‑quality products.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NabinKhadka1"
                className="text-primary-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/nabinkhadka1"
                className="text-primary-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-linear-to-br from-primary-400 to-emerald-500 p-2">
                <img
                  src={Nabin}
                  alt="Alex Chen"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center">
                <FaCode className="text-white text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
