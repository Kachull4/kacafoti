"use client";

import { Container, Heading } from "@/app/(home)/styled";
import { device } from "@/app/breakpoints";
import Link from "next/link";
import styled from "styled-components";

export const BlogContainer = styled(Container)`
  padding: 0 2rem;
`;

export const BlogGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

export const BlogHeading = styled(Heading)`
  text-align: center;
  font-size: 5rem;
`;

export const Tile = styled(Link)`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 50rem;
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  ${device.md} {
    max-width: 30rem;
  }
`;

export const TileImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 20rem;
  object-fit: cover;
`;

export const TileContent = styled.div`
  padding: 1em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const TileTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 0.5em;
`;

export const TileDescription = styled.p`
  font-size: 1.6rem;
  margin: 0 0 1rem;
`;

export const TileDate = styled.div`
  font-size: 1.4rem;
  margin: 0 0 1rem;
  margin-top: auto;
`;
