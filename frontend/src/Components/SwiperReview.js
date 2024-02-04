import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay,FreeMode,  Navigation} from "swiper/modules";
import ReviewData from "../Components/ReviewData.js";
import 'swiper/css/navigation';
import Stars from './Star.js';

export default function SwiperReview(){
    return(
        <Swiper
            loop = {true}
            breakpoints={{
                340: {
                    slidesPerView:1,
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 15
                }
            }}
            freeMode = {true}
            autoplay = {{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination = {{
                clickable: true
            }}
            modules={[FreeMode , Autoplay , Navigation]}
        >
            {ReviewData.map((r) => (
                <SwiperSlide key = {r.id}>
                    <div className="shadow-md p-2 lg:p-12">
                        <div className=" flex lg:space-y-6 space-y-4 flex-col sticky items-center justify-center text-center">
                            <img alt="#" src= {r.img_url} className="w-20 rounded-full" />
                            <div className=" flex flex-col">
                                <h1 className=" text-2xl">{r.name}</h1>
                            </div>
                            <Stars len = {r.stars} />
                            <div className="">
                                <span>
                                    {r.description}
                                </span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};