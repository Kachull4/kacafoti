"use client"

import Link from "next/link";
import styled from "styled-components"

export const BlogGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Tile = styled(Link)`
    border: '1px solid #ddd';
    border-radius: '10px';
    overflow: 'hidden';
    box-shadow: '0 2px 8px rgba(0, 0, 0, 0.1)';
    max-width: '300px';
    margin: '1em';
    text-decoration: 'none';
`

export const TileImage = styled.img`
    width: '100%';
    height: 'auto';
`;

export const TileContent = styled.div`
    padding: 1em;
`;

export const TileTitle = styled.h2`
    font-size: 1.5em;
    margin: 0 0 0.5em;
    color: #333;
`;

export const TileDescription = styled.p`
    font-size: 1em;
    color: #666;
    margin: 0 0 1em;
`;