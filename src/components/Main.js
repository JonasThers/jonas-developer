import React, { useState, useEffect } from "react";
import Header from './Header';
import Resume from "./Resume";

const Main = () => {
  const [loadContent, setLoadContent] = useState(0);

  const startToLoad = () => {
    setLoadContent(1);
  };

  useEffect(() => {
    setTimeout(() => {
      startToLoad();
    }, 500);
  }, []);

  return (
    <div style={{ opacity: loadContent }}>
      <div className="main">
        <Header />
        <div className="main__current-job">Currently employed at <a href="https://www.lamia.fi">Lamia</a></div>
        <div className="main__intro">
          Hello, my name is Jonas, and I'm a Danish developer living in Espoo, Helsinki.
        </div>
      </div>
      <Resume />
    </div>
  );
};

export default Main;
