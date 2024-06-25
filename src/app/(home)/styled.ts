"use client"

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
    max-width: 125rem;
    margin: 10rem auto;
`

export const Title = styled.h1`
    font-family: var(--pacifico);
    font-weight: normal;
    font-size: 3.2rem;
`

export const Heading = styled.h2`
    font-family: var(--pacifico);
    font-weight: normal;
    font-size: 3rem;
    text-wrap: balance;
    line-height: 1.5;
    margin-bottom: 2rem;
`

export const Intro = styled.section`
    background-color: #eeeef4;
    padding: 1px 0;

    ${Container}{
        display: flex;
        align-items: center;
        gap: 5rem;
    }
`

export const Avatar = styled(Image)`
    width: 50rem;
    height: auto;
`

export const Landscape = styled(Image)`
    width: 80rem;
    height: auto;
    border-radius: 10px;
`

export const Animal = styled(Image)`
    width: 80rem;
    height: auto;
    border-radius: 10px;
`

export const Pet = styled(Image)`
    width: 80rem;
    height: auto;
    border-radius: 10px;
`

export const Navbar = styled.nav`
    background-color: #fff;

    ${Container}{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
`

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    gap: 5rem;
    list-style: none;
    font-size: 2rem;
`

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    padding: 2rem;
    margin: 5rem auto;
    max-width: 160rem;
`;