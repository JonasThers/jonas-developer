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
    <div className="twinkling-fix">
      <div className="main container" style={{ opacity: loadContent }}>
        <Header />
        <div className="main__current-job">Currently employed at <a target="blank" href="https://www.lamia.fi">Lamia</a></div>
        <Resume />
        <div className="main__contact">
          Reach me at <a href="mailto: jonasthers1992@gmail.com">jonasthers1992@gmail.com</a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Main;
