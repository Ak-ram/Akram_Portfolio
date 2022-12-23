import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import NotFoundRoute from "./Pages/404";
import Projects from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Search from "./Pages/Search";
import Tooltip from "./Components/Tooltip";
const App = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="flex">
      <Tooltip />
      <BrowserRouter>
        <Sidebar
          onSidebarHide={() => {
            onSetShowSidebar(false);
          }}
          showSidebar={showSidebar}
        />
        <div className="flex w-full">
          <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
            .
          </div>
          <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
            <Routes>
              {["/", "/dashboard"].map((path, index) => (
                <Route
                  path={path}
                  element={
                    <Dashboard
                      onSidebarHide={() => {
                        onSetShowSidebar(true);
                      }}
                    />
                  }
                  key={index}
                />
              ))}
              <Route
                path="/projects"
                element={
                  <Projects
                    onSidebarHide={() => {
                      onSetShowSidebar(true);
                    }}
                  />
                }
              />
              <Route path="/search" element={<Search />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/*" element={<NotFoundRoute />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
