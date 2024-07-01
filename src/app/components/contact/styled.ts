"use client"

import { Container } from "@/app/(home)/styled"
import { device } from "@/app/breakpoints"
import styled from "styled-components"

export const Contact = styled.section`
    background-color: #eeeef4;
    padding: 1px 0;
    margin-top: auto;

    ${Container}{
        margin: 2rem auto;
        text-align: center;

        ${device.md} {
            margin: 5rem auto;
        }
    }
`

export const Icons = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    img {
        width: 5rem;
        height: auto;
    }
`