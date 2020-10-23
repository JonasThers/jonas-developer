import React, { useState, useMemo } from "react";
import Opening from "./components/Opening";
import LoadingScreen from "./components/LoadingScreen";
import Main from "./components/Main";
import { LoadingContext } from "./components/LoadingContext";

const App = () => {
  const [loading, setLoading] = useState(1);

  const loadingValue = useMemo(() => ({ loading, setLoading }));

  return (
    <div>
      <LoadingContext.Provider value={loadingValue}>
        {loading === 1 && <Opening />}
        {loading === 2 && <LoadingScreen />}
        {loading === 3 && <Main />}
      </LoadingContext.Provider>
    </div>
  );
};

export default App;
