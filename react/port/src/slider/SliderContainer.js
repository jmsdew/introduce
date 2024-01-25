import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export const SliderContainer = () => {

    return (
      <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      observer={true}
      observeParents={true}
    >
      <SwiperSlide><img src={require('../image/project.png')} className='img1'/></SwiperSlide>
      <SwiperSlide><img src={require('../image/site1.png')} className='img1'/></SwiperSlide>
      <SwiperSlide><img src={require('../image/semi2.png')} className='img1'/></SwiperSlide>
      <SwiperSlide><img src={require('../image/site3.png')} className='img1'/></SwiperSlide>
      
    </Swiper>
      </>
    )
}

