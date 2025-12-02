import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { contextApi } from "../context";
import { navLinks } from "../data";
import Ham from "/hamburger.svg";

const Header = () => {
  const { openSidebar, handleToggle, isDark } = useContext(contextApi);
  return (
    <header
      id="header"
      className="sticky top-0  px-4 py-4 md:px-8 lg:px-20 xl:px-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800"
    >
      <nav className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            nabin.dev
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, href, label }) => (
              <a
                key={id}
                href={href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {label}
              </a>
            ))}
            <button
              id="theme-toggle"
              aria-pressed={isDark}
              onClick={handleToggle}
              className="w-6 h-6 rounded-full"
            >
              <FaMoon className="dark:hidden" />
              <FaSun className="hidden dark:block dark:text-white" />
            </button>
          </div>
          <button
            onClick={openSidebar}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-white hover:bg-gray-300 dark:hover:bg-gray-400"
            aria-label="Open menu"
          >
            <img src={Ham} alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
