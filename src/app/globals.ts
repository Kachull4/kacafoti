"use client"

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: #000;
  background-color: #fff;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

`