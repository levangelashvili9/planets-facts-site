import { createGlobalStyle } from "styled-components";
import BackgroundSVG from "./assets/background-stars.svg";

export const themes = {
  backgroundImg: `url(${BackgroundSVG})`,
  bodyColor: "#070724",
};

export const GlobalStyles = createGlobalStyle`
  
body {
  background-image: ${(props) => props.theme.backgroundImg};
  background-color: ${(props) => props.theme.bodyColor};
  background-repeat: no-repeat;
  }

`;
