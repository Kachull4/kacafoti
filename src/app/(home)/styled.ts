"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { device } from "../breakpoints";

export const Container = styled.div`
  max-width: 125rem;
  margin: 10rem auto;
`;

export const Navbar = styled.nav`
  background-color: #fff;
  position: sticky;
  top: -7.5rem;
  z-index: 10;

  ${device.md} {
    padding: 0 1rem;
    top: 0;
  }

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    ${device.md} {
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  font-size: 1rem;
  padding: 1rem;
  margin: 0;
  width: 100%;

  ${device.md} {
    font-size: 2rem;
  }
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 3em;

    ${device.md} {
      display: none;
    }
  }
`;

export const AnimalsSvg = styled.svg`
  opacity: 0.6;
`;

export const Title = styled.a`
  flex-shrink: 0;

  h1 {
    font-family: var(--pacifico);
    font-weight: normal;
    font-size: 3.2rem;
    flex-shrink: 0;
    margin: 1rem auto;
  }
`;

export const Heading = styled.h2`
  font-family: var(--pacifico);
  font-weight: normal;
  font-size: 2.5rem;
  text-wrap: balance;
  line-height: 1.5;
  margin-bottom: 2rem;

  ${device.md} {
    text-wrap: balance;
    font-size: 3rem;
  }
`;

export const Intro = styled.section`
  background-color: #eeeef4;
  padding: 1px 2rem;
  scroll-margin-block: 5rem;

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin: 5rem auto;

    ${device.lg} {
      flex-direction: row;
      gap: 10rem;
      margin: 20rem auto;
    }
  }

  ${Heading} {
    text-align: center;

    ${device.md} {
      text-align: left;
    }
  }

  p {
    text-align: justify;
    hyphens: auto;
  }
`;

export const Avatar = styled(Image)`
  width: 35rem;
  height: auto;

  ${device.md} {
    width: 50rem;
  }
`;

export const Photo = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  flex-shrink: 0;
  order: 2;

  ${device.md} {
    order: unset;
    width: 50%;
  }

  ${device.lg} {
    margin-right: -10%;
  }

  ${device.xxl} {
    width: 60%;
    margin-right: -20%;
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  margin: 3rem auto;
  scroll-margin-block: 5rem;

  ${device.md} {
    flex-direction: row;
    gap: 5rem;
    margin: 5rem auto;
    max-width: 105rem;
  }

  ${device.xxl} {
    max-width: 125rem;
  }

  div:nth-child(odd) & ${Photo} {
    margin-right: 0;

    ${device.lg} {
      margin-left: -10%;
    }

    ${device.xxl} {
      margin-left: -20%;
    }
  }

  p {
    text-align: justify;
    hyphens: auto;
    order: 1;

    ${device.lg} {
      order: unset;
    }
  }

  ${Heading} {
    text-align: center;

    ${device.lg} {
      text-align: left;
    }
  }
`;

export const CardButton = styled(Heading)`
  font-size: 2rem;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

export const Blog = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin: 3rem auto;
  scroll-margin-block: 5rem;
`;

export const BlogTileRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${device.md} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

export const BlogTile = styled.div`
  border-radius: 10px;
`;

export const BlogButton = styled(Link)`
  font-family: var(--pacifico);
  font-size: 2rem;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;
