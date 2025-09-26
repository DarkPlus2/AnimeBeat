import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel({ items }) {
  return (
    <Swiper spaceBetween={10} slidesPerView={3}>
      {items.map(item => (
        <SwiperSlide key={item.mal_id}>
          <img src={item.images.jpg.image_url} alt={item.title} className="rounded" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
