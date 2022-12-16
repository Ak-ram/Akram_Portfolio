import './App.css';

import { useEffect, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import { githubAPI } from './Contexts/api';
const App = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const [repos, setRepos] = useState<any>()

  useEffect(() => {
    githubAPI.getReposByName('ak-ram', 10, 1).then(res => {
      setRepos(res)
    }).catch((reason) => {
      new Error("error with githubAPI in App.tsx file" + reason)
    });
console.log(repos)
  }, [repos])
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
}


export default App
