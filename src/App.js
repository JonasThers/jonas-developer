import React, { useState, useMemo } from "react";
import Opening from "./components/Opening";
import LoadingScreen from "./components/LoadingScreen";
import Main from "./components/Main";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { LoadingContext } from "./context/LoadingContext";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [loading, setLoading] = useState(1);
  const [theme, setTheme] = useState(false);

  const loadingValue = useMemo(() => ({ loading, setLoading }));
  const themeValue = useMemo(() => ({ theme, setTheme }));

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={theme ? 'modern-background' : 'retro-background'}>
        <div className={theme ? 'modern' : 'retro twinkling'}>
          <ThemeSwitcher />
          <LoadingContext.Provider value={loadingValue}>
            {loading === 1 && <Opening />}
            {loading === 2 && <LoadingScreen />}
            {loading === 3 && <Main />}
          </LoadingContext.Provider>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
