import "./App.css";

import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
const App = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (

      <div className="flex">
        <Sidebar
          onSidebarHide={() => {
            onSetShowSidebar(false);
          }}
          showSidebar={showSidebar}
        />
        <Content
          onSidebarHide={() => {
            onSetShowSidebar(true);
          }}
        />
      </div>
  );
};

export default App;
