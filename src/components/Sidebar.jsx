import Cross from "/cross.svg";
import { useContext, useEffect, useRef } from "react";
import { contextApi } from "../context";

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
    <section className={sidebars} ref={sidebarRef}>
      <aside>
        <div className="sidebar__header">
          <div className="navbar__brand">
            <a href="#home" className="logo">
              nabin.dev
            </a>
          </div>
          <button className="sidebar__remove" onClick={closeSidebar}>
            <img src={Cross} alt="cross icon" />
          </button>
        </div>

        <ul className="sidebar__menu">
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#home">Home</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#about">About</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#portfolio">Portfolio</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#contact">Contact</a>
            </button>
          </li>
          <li className="sidebar__list">
            <button onClick={closeSidebar}>
              <a href="#footer">Footer</a>
            </button>
          </li>
        </ul>
      </aside>
    </section>
  );
};
export default Sidebar;
