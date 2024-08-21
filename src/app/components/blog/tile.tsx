"use client";

import Link from "next/link";
import {
  Tile,
  TileContent,
  TileDescription,
  TileImage,
  TileTitle,
} from "./styled";

interface BlogTileProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  readMoreLink: string;
}

export const BlogTile: React.FC<BlogTileProps> = ({
  title,
  description,
  imageUrl,
  altText,
  readMoreLink,
}) => {
  return (
    <Link href={readMoreLink} passHref>
      <Tile>
        <TileImage src={imageUrl} alt={altText} />
        <TileContent>
          <TileTitle>{title}</TileTitle>
          <TileDescription>{description}</TileDescription>
        </TileContent>
      </Tile>
    </Link>
  );
};
