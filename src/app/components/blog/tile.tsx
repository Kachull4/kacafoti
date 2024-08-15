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
    <Tile href="#">
      <TileImage src={imageUrl} alt={altText} />
      <TileContent>
        <TileTitle>{title}</TileTitle>
        <TileDescription>{description}</TileDescription>
      </TileContent>
    </Tile>
  );
};
