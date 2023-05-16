import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./pages/Loading Screen/index";
import Index from "./pages/Main Page";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //determines how long the loading screen is in seconds. 3 second delay
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <ThemeProvider theme={theme}>
          <LoadingScreen />{" "}
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <Index />
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
