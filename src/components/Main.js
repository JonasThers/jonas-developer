import React, { useState, useEffect, useContext } from "react";
import Header from './Header';
import Resume from "./Resume";
import Github from "../assets/github2.png";
import { ThemeContext } from "../context/ThemeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);

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
    <div className={theme ? '' : 'twinkling-fix-background'}>
      <div className={theme ? '' : 'twinkling-fix'}>
        <div className="main container" style={{ opacity: loadContent }}>
          <Header />
          <div className="main__current-job">Currently {theme ? 'employed' : 'protecting the universe from evil'} at <a target="blank" href="https://venuu.fi/">Venuu</a></div>
          <Resume />
          <div className="main__contact">
            Reach me at <a href="mailto: jonasthers1992@gmail.com">jonasthers1992@gmail.com</a>
          </div>
          <br />
          <div className="github-link">
            <a target="blank" href="https://www.github.com/JonasThers">
              <img src={Github} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
