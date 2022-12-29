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
import RepoDetails from "./Pages/RepoDetails";
import Blog from "./Pages/blog";
import { DevBlogsContextProvider } from "./Contexts/DEVAPIContext";
import Login from "./Pages/Login";
import About from "./Pages/About";
const App = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [isLogging, setIsLogging] = useState(true);
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
    <DevBlogsContextProvider>
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
                {isLogging ? (
                  <Route
                    path="/dashboard"
                    element={
                      <Dashboard
                        onSidebarHide={() => {
                          onSetShowSidebar(true);
                        }}
                      />
                    }
                  />
                ) : null}
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
                <Route
                  path="projects/:repoName"
                  element={
                    <RepoDetails
                      onSidebarHide={() => {
                        onSetShowSidebar(true);
                      }}
                    />
                  }
                />
                <Route path="/search" element={<Search />} />
                {['/','/about'].map((route,i)=>{

               return <Route key={i} path={route} element={<About />} />

                })}
                <Route path="/settings" element={<Settings />} />
                <Route
                  path="/blog"
                  element={
                    <Blog
                      onSidebarHide={() => {
                        onSetShowSidebar(true);
                      }}
                    />
                  }
                />
                {["/dashboard", "/signup"].map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route}
                      element={
                        <Login
                          setIsLogging={setIsLogging}
                          isLogging={isLogging}
                        />
                      }
                    />
                  );
                })}
                <Route path="/*" element={<NotFoundRoute />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </DevBlogsContextProvider>
  );
};

export default App;
