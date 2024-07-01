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

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eeeef4cc;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

export const ModalContent = styled.div`
--swiper-theme-color: #ff6666;
  padding: 2rem;
  border-radius: 10px;
  max-width: 192rem;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    max-width: 160rem;
    height: auto;
    cursor: initial;
    display: block;
    margin: 0 auto;
  }

  .swiper-pagination-bullet {
    width: 2rem;
    height: 2rem;
    background-color: #ff9999;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 5rem;
  background: none;
  border: none;
  font-size: 10rem;
  cursor: pointer;
`;
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