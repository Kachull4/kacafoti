import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FC } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  images: StaticImport[];
  defaultIndex: number;
};

export const SwiperGallery: FC<Props> = ({ images, defaultIndex }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      initialSlide={defaultIndex}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} alt={`Image ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
