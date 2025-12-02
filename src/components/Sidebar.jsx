import Cross from "/cross.svg";
import { useContext, useEffect, useRef } from "react";
import { contextApi } from "../context";
import { navLinks } from "../data";

const Sidebar = () => {
  const sidebarRef = useRef();
  const { closeSidebar, isSidebarOpen } = useContext(contextApi);

  const sidebars = isSidebarOpen ? `showSidebar sidebar` : "sidebar";
  useEffect(() => {
    const changingSize = window.addEventListener("resize", (e) => {
      const sidebarWidth = sidebarRef?.current?.getBoundingClientRect();
      const { width } = sidebarWidth;
      if (width >= 900) {
        closeSidebar();
      }
    });
    return () => window.removeEventListener("resize", changingSize);
  }, [sidebarRef]);

  return (
    <section
      className={`${sidebars} bg-white dark:bg-gray-900`}
      ref={sidebarRef}
    >
      <aside>
        <div className="sidebar__header container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="navbar__brand">
            <a
              href="#home"
              className="logo text-2xl font-bold text-gray-800 dark:text-white"
            >
              nabin.dev
            </a>
          </div>
          <button
            className="sidebar__remove w-7.5 h-7.5"
            onClick={closeSidebar}
          >
            <img src={Cross} alt="cross icon" className="w-full h-full" />
          </button>
        </div>

        <ul className="sidebar__menu flex flex-col px-6 space-y-6">
          {navLinks.map(({ id, href, label }) => (
            <li key={id}>
              <button onClick={closeSidebar}>
                <a
                  href={href}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {label}
                </a>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};
export default Sidebar;
