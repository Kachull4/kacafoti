"use client"

import styled from "styled-components"

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