"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useState } from "react";
import { GalleryBox } from "./styled";
import { Modal } from "../modal";
import { SwiperGallery } from "../swiper";
import { AnimatedOnScroll } from "../animated-on-scroll";
import { useMedia } from "react-use";
import { size } from "@/app/breakpoints";

type Props = {
  images: StaticImport[];
};

export const Gallery: FC<Props> = ({ images }) => {
  const [activeModalIndex, setActiveModalIndex] = useState(-1);

  const isWide = useMedia(`(min-width: ${size.md})`);

  const handleCloseModal = () => {
    setActiveModalIndex(-1);
  };

  return (
    <GalleryBox>
      {images.map((image, index) => (
        <Image
          src={image}
          alt={`Image ${index + 1}`}
          width={300}
          key={index}
          onClick={() => isWide && setActiveModalIndex(index)}
        />
      ))}
      <Modal show={activeModalIndex >= 0} onClose={handleCloseModal}>
        <SwiperGallery
          images={images}
          defaultIndex={activeModalIndex}
        ></SwiperGallery>
      </Modal>
    </GalleryBox>
  );
};
