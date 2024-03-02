import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import porfolio from "../Components/Data";

export default function SwiperPro() { 
    const ChangeUrl = (name , url) => {
        if (url === "Porfolio"){
            window.location.href = `/${url}#${name}`;
        }
        else{
            window.location.href = `/${url}`;
        }
    };

    return (
        <Swiper
            loop = {true}
            breakpoints={{
                340: {
                    slidesPerView:1,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            autoplay = {{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination = {{
                clickable: true
            }}
            modules={[Autoplay]}
        >
            {porfolio.map((s) => {
                switch (s.placeName){
                    case "3D Project":
                        return (
                            <SwiperSlide key = {s.id}>
                                <div className="lg:p-4">
                                    <div onClick={() => ChangeUrl(s.placeName, "Porfolio")} className=" flex sticky lg:hidden">
                                        <img alt="#" className=" rounded-lg" src={s.img} />
                                        <div className=" absolute bg-black bg-opacity-20 p-1 inset-0 z-10 flex flex-col justify-end opacity-100">
                                            <div className="ml-3 flex items-center space-x-1">
                                                <h1 className="text-xl">{s.placeName}</h1>
                                                <span className=" text-sky-200">(Comming soon)</span>
                                            </div>
                                            <div className=" flex ml-4 text-sm items-center space-x-1">
                                                <span className="">View More</span>
                                                <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => ChangeUrl(s.placeName, "Porfolio")} className="sticky lg:block hidden">
                                        <img alt="#" className=" rounded-lg" src={s.img} />
                                        <div className=" absolute p-8 inset-0 z-10 bg-black flex flex-col justify-end opacity-0 hover:opacity-100 ease-linear duration-500 transition-all bg-opacity-50">
                                            <div className="ml-3 text-2xl">
                                                <h1>{s.placeName}</h1>
                                            </div>
                                            <div className="ml-5 text-sky-200 text-lg">
                                                <h1>Comming Soon</h1>
                                            </div>
                                            <div className=" flex ml-4 text-lg items-center font-thin space-x-1">
                                                <span className="">View More</span>
                                                <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                        default:
                            return (
                                <SwiperSlide key={s.id}>
                                    <div className="lg:p-4">
                                        <div onClick={() => ChangeUrl(s.placeName, "Porfolio")} className=" flex sticky lg:hidden">
                                            <img alt="#" className=" rounded-lg" src={s.img} />
                                            <div className=" absolute p-1 inset-0 z-10 flex flex-col justify-end opacity-100">
                                                <div className="ml-3 text-xl">
                                                    <h1>{s.placeName}</h1>
                                                </div>
                                                <div className=" flex ml-4 text-sm items-center space-x-1">
                                                    <span className="">View More</span>
                                                    <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={() => ChangeUrl(s.placeName, "Porfolio")} className="sticky lg:block hidden">
                                            <img alt="#" className="rounded-lg" src={s.img} />
                                            <div className=" absolute p-8 inset-0 z-10 bg-black flex flex-col justify-end opacity-0 hover:opacity-100 ease-linear duration-500 transition-all bg-opacity-50">
                                                <div className="ml-3 text-2xl">
                                                    <h1>{s.placeName}</h1>
                                                </div>
                                                <div className=" flex ml-4 text-lg items-center font-thin space-x-1">
                                                    <span className="">View More</span>
                                                    <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                }
            })}
        </Swiper>
    )  
};
