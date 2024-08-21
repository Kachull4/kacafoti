"use client"

import { Container } from "@/app/(home)/styled";
import styled from "styled-components";

export const BlogContainer = styled(Container)`
  max-width: 90rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 1em;
`;

export const Content = styled.div`
  h2 {
    font-size: 2.4rem;
  }

  p {
    font-size: 2rem;
  }
`;