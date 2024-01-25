import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import hero2 from './../assets/hero2.jpg'
import hero3 from './../assets/hero3.jpg'
import hero4 from './../assets/hero4.jpg'
import hero5 from './../assets/hero5.jpg'

const heroImages = [
    {
        id: 'ereer34',
        image: hero2
    },
    {
        id: 'ereer34',
        image: hero3
    },
    {
        id: 'ereer34',
        image: hero4
    },
    {
        id: 'ereer34',
        image: hero5
    }
]
// Import Swiper styles
import 'swiper/css';
const Hero = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}

            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {
                heroImages.map((item) => (

                    <SwiperSlide key={item.id}>
                        <div className='w-full h-[40rem] object-cover'>
                            <img src={item.image} alt='hero-image' />
                        </div>
                    </SwiperSlide>
                ))
            }


        </Swiper>
    )
}

export default Hero