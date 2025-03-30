"use client";

import Image from "next/image";
import styled from "styled-components";

export const Intro = styled.div`
  position: relative;
  background-color: #000;
`;

export const LogoWhite = styled(Image)`
  position: absolute;
  bottom: 50%;
  left: 15%;
  transform: translateY(50%);
  max-width: 70%;
  height: auto;

  @media (orientation: landscape) {
    bottom: 10%;
    top: auto;
    right: 10%;
    left: auto;
    transform: none;
    max-width: 30%;
  }

  @media (min-aspect-ratio: 16 / 9) {
    bottom: 50%;
    transform: translateY(50%);
  }
`;

export const IntroImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
  max-height: calc(100svh - 10rem);
  margin-inline: auto;
  object-fit: contain;

  @media (orientation: landscape) {
    object-position: 0 100%;
  }
`;

export const Divider = styled.div`
  position: absolute;
  bottom: -5rem;
  left: 0;
  width: 100%;
  height: 10rem;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.4) 25%,
    rgba(0, 0, 0, 0.9) 50%,
    rgba(0, 0, 0, 0.4) 75%,
    transparent 100%
  );
`;
