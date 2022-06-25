import "./App.css";

import { ThemeProvider } from "styled-components";
import StyledNormalize from "./styled";

import themeSettings from "./styled/theme";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <StyledNormalize />
      <ThemeProvider theme={themeSettings}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
