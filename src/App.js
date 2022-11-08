import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes, GlobalStyles } from "./themes";
import { Route, Routes } from "react-router-dom";
import PageMobile from "./pages/PageMobile";
import PageTablet from "./pages/PageTablet";

function App() {
  const [section, setSection] = useState("overview");

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageMobile section={section} setSection={setSection} />
              <PageTablet section={section} setSection={setSection} />
            </>
          }
        />
        <Route
          path="/:planetName"
          element={
            <>
              <PageMobile section={section} setSection={setSection} />
              <PageTablet section={section} setSection={setSection} />
            </>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
