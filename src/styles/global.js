import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --background-body: #F3F2F1;
  --background-header: #FFFFFF;
  --background-form-header: #00796B;
  --background-form-button-hover: #00A98E;
  --label-color: #69747B;
}

body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-body);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9E9E9E;
    border-radius: 4px;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px white inset;
}
`