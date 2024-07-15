"use client"

import styled from "styled-components"
import { Heading } from "@/app/(home)/styled";
import Link from "next/link";

export const GalleryHeading = styled(Heading)`
    text-align: center;
    font-size: 5rem;
`

export const GalleryBox = styled.div`
    max-width: 192rem;
    margin: 5rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0 2rem;

    img {
        border-radius: 10px;
        width: 100%;
        height: auto;
        cursor: pointer;
        width: auto;
        height: 25rem;
    }
`

export const BackButton = styled(Link)`
font-family: var(--pacifico);
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