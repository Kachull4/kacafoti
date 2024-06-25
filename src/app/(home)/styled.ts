"use client"

import Image from "next/image";
import Link from "next/link";
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
        gap: 10rem;
    }

    p {
        text-align: justify;
        hyphens: auto;
    }
`

export const Avatar = styled(Image)`
    width: 50rem;
    height: auto;
`

export const Photo = styled(Image)`
    width: 80%;
    height: auto;
    border-radius: 10px;
    flex-shrink: 0;
    margin-right: -20%;
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

export const Card = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    padding: 2rem;
    margin: 5rem auto;
    max-width: 125rem;

    &:nth-child(odd) ${Photo}{
        margin-right: 0;
        margin-left: -20%;
    }

    p {
        text-align: justify;
        hyphens: auto;
    }
`;