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
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="text-base font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                Hi, I'm Nabin Khadka
              </p>
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 dark:text-white leading-tight">
                  Fullstack{" "}
                  <span className="text-primary-600 dark:text-primary-400">
                    Engineer
                  </span>
                </h1>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400 border border-primary-200 dark:border-primary-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400"></span>
                  Frontend Specialist
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              I build production-grade web applications with a strong focus on{" "}
              <span className="text-gray-800 dark:text-gray-100 font-medium">
                frontend architecture
              </span>{" "}
              and developer experience. At OLE Nepal, I craft ed-tech platforms
              used by thousands designing reusable systems, solving complex UI
              challenges, and contributing to backend APIs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm transition-colors"
              >
                Get in Touch
              </a>
              <div className="flex items-center gap-4 pl-2 border-l border-gray-200 dark:border-gray-700">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/NabinKhadka1"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/nabinkhadka1"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-linear-to-br from-primary-400 to-emerald-500 p-2">
                <img
                  src={Nabin}
                  alt="Nabin Khadka"
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
