import { GalleryPage } from "@/app/components/gallery";

const images = [...Array(8)].map((_, i) =>
  require(`./images/image (${i + 1}).jpg`)
);

export default function Mazlicci() {
  return <GalleryPage images={images} title="Mazlíčci" />;
}
