import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TopBanner } from '@app-ui/TopBanner';

import { useAppSelector } from '@hooks/useAppSelector';

import { getCamerasList } from '@slice/camera/camera-selectors/camera-selectors';

import { SLIDES_AMOUNT, SLIDES_AUTOPLAY_DELAY } from '@utils/const/const';

import 'swiper/css';
import 'swiper/css/pagination';

export const TopSlider = () => {
  const cardsListData = useAppSelector(getCamerasList);

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: SLIDES_AUTOPLAY_DELAY, disableOnInteraction: false }}
    >
      {cardsListData
        .map((item) => (
          <SwiperSlide key={item.id}>
            <TopBanner
              props={item}
              key={item.id}
            />
          </SwiperSlide>
        ))
        .slice(0, SLIDES_AMOUNT)}
    </Swiper>
  );
};
