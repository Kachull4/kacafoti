import { GalleryPage } from "@/app/components/gallery";

const images = [...Array(2)].map((_, i) =>
  require(`./images/image (${i + 1}).jpg`)
);

export default function Zvirata() {
  return <GalleryPage images={images} title="Zvířata" />;
}
