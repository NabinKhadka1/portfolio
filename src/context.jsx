import { createContext, useEffect, useState } from "react";
export const contextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch {
      return false;
    }
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  const handleToggle = () => setIsDark((s) => !s);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <contextApi.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        openSidebar,
        closeSidebar,
        isDark,
        handleToggle,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};
