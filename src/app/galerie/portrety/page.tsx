import { GalleryPage } from "@/app/components/gallery";

const images = [...Array(1)].map((_, i) =>
  require(`./images/image (${i + 1}).jpg`)
);

export default function Portrety() {
  return <GalleryPage images={images} title="Portréty" />;
}
