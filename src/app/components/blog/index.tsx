import { BlogGrid } from "./styled";
import { BlogTile } from "./tile";

export const BlogPage: React.FC = () => {
  return (
    <BlogGrid>
      <BlogTile
        title="Jak začít s fotografováním"
        description="Tipy a triky pro začínající fotografy. Od základů až po pokročilé techniky."
        imageUrl="https://example.com/image1.jpg"
        altText="Fotografie článku"
        readMoreLink="/blog/jak-zacit-s-fotografovanim"
      />
      <BlogTile
        title="Nejlepší místa pro focení v přírodě"
        description="Prozkoumejte nejkrásnější místa v přírodě ideální pro focení."
        imageUrl="https://example.com/image2.jpg"
        altText="Přírodní scenérie"
        readMoreLink="/blog/nejlepsi-mista-pro-foceni"
      />
    </BlogGrid>
  );
};
