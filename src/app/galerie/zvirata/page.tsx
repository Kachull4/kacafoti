import { GalleryPage } from "@/app/components/gallery";

const images = [...Array(14)].map((_, i) =>
  require(`./images/image (${i + 1}).jpg`)
);

export default function Zvirata() {
  return <GalleryPage images={images} title="Zvířata" />;
}
