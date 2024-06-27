import fs from "fs";
import Image from "next/image";
import path from "path";

export const Gallery = () => {
  const imagesDirectory = path.join(
    process.cwd(),
    "src/app/galerie/krajina/images"
  );
  const filenames = fs.readdirSync(imagesDirectory);
  const images = filenames.map((filename) => `/images/${filename}`);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {images.map((image, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={300}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};
