import { createContext, useEffect, useState } from "react";
import { data } from "./data";

export const contextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(data);
  const [datas, setDatas] = useState("frontend");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const filteredData = data.filter((info) => info.projectType === datas);
    setProjects(filteredData);
  }, [datas]);

  const handleSubmitData = (txt) => {
    setDatas(txt);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <contextApi.Provider
      value={{
        projects,
        handleSubmitData,
        isSidebarOpen,
        setIsSidebarOpen,
        openSidebar,
        closeSidebar,
        datas,
        setDatas,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};
