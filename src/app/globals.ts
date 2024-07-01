"use client"

import { createGlobalStyle } from "styled-components";
import { device } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
}

html, body {
  height: 100%;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  color: #000;
  background-color: #fff;
  margin: 0;
}

main {
  flex-grow: 1;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  margin-bottom: 1rem;
  font-size: 1.6rem;

  ${device.md} {
        font-size: 1.8rem;
    }
}

`