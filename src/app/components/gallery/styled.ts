"use client"

import styled from "styled-components"
import { Heading } from "@/app/(home)/styled";

export const GalleryHeading = styled(Heading)`
    text-align: center;
`

export const GalleryBox = styled.div`
    max-width: 192rem;
    margin: 5rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding: 0 2rem;

    img {
        border-radius: 10px;
        width: 100%;
        height: auto;
        cursor: pointer;
    }
`

export const BackButton = styled.a`
  position: absolute;
  top: 3rem;
  left: 5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
`;