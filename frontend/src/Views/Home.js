import React from "react";
import CarouselHome from "../Components/Carousel";
import icon1 from "../img/shovel_icon.png";
import icon2 from "../img/hammer_icon.png";
import {Fade , Slide , JackInTheBox} from "react-awesome-reveal";
import SwiperPro from "../Components/SwiperPro";
import SwiperReview from "../Components/SwiperReview";
import secondimg from "../img/secondimg.png";
export default function Home(){
    const ChangeUrl = (name , url) => {
        if (url === "Porfolio"){
            window.location.href = (`/${url}/#${name}`);
        }
        else{
            window.location.href = (`/${url}`);
        }
    };

    return (
        <section className="relative">
            <CarouselHome />
            <Fade duration={1500} delay={100}>
                <div className="lg:p-8 p-2 mx-auto max-w-screen-xl">
                    <div className=" grid gap-8 lg:grid-cols-2">
                        <JackInTheBox cascade>
                            <div className=" h-fit shadow-md cursor-pointer">
                                <img alt="#" className=" hover:opacity-60 transition-opacity ease-in-out duration-200 delay-100" src={secondimg} />
                            </div>
                        </JackInTheBox>
                        <Slide direction="right" cascade>
                            <div className="flex flex-col xl:py-14 space-y-2 lg:space-y-4 px-6 lg:px-8">
                                <h3 className="tracking-wide text-center lg:text-start uppercase text-3xl lg:text-4xl">Who we Are ?</h3>
                                <div className=" !font-newFont space-y-3">
                                    <span className="lg:text-xl text-lg text-black/90">
                                        Leading reputable construction company in San Jose and the Bay Area
                                        Specializing in building new houses, ADUs, and additions
                                        Also builds new restaurants, nail salons, hair salons, and bubble tea shops
                                        BD Home Group is a fully licensed and certified construction company operating in various cities, particularly always insured
                                        Free consultation and advice for our customers.
                                    </span>
                                    <ul className="text-lg text-black/60 space-y-2 list-inside list-disc">
                                        <li>
                                            Our expert team is committed to delivering cutting-edge construction solutions, 
                                            emphasizing superior quality and rigorous safety standards. 
                                        </li>
                                        <li>
                                            We prioritize understanding your unique construction needs, designing services that 
                                            seamlessly align with your vision
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex pb-4 pt-2 justify-center">
                                    <button onClick={() =>
                                        window.location.href = "tel:6696996999"
                                    } className=" py-3 hover:shadow-md transition ease-in-out duration-200 delay-100 group border-main-color border-[#e6b54e] hover:bg-[#e6b54e] px-12 border-[1px]">
                                        <span className=" transition ease-in-out duration-200 delay-100 text-lg group-hover:text-white">
                                            Contact Us
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </Fade>

            <Fade delay={200} duration={500}>
                <div className="bg-[#010a8b] text-white lg:p-12 p-5 space-y-4">
                    <div className=" flex mt-4 flex-col justify-center text-center">
                        <h1 className="uppercase  text-3xl lg:text-4xl">Our Services</h1>
                        <span className=" font-thin lg:text-xl">Years of Experience</span>
                    </div>
                    <div className="lg:p-4 p-2 mx-auto max-w-screen-xl cursor-pointer">
                        <div className=" grid ml-0 lg:p-4 lg:ml-6 lg:grid-cols-2 gap-6 lg:gap-12 place-items-center">
                            <div className="">
                                <div className=" text-center space-y-4 flex flex-col justify-center">
                                    <img alt="#" className="" src={icon1} />
                                    <h1 className=" uppercase text-xl">New construction for resident</h1>
                                    <span className="italic">
                                        BD Home Group, a leading name in San Jose and the Bay Area, specializes in building new homes, ADUs, 
                                        and additions.As a fully licensed and certified construction company, we pride ourselves on creating 
                                        spaces that blend innovative design with functionality. Our experienced team ensures each project reflects your personal style, utilizing top-quality materials for long-lasting results.
                                         With free consultations and committed to your satisfaction, we're here to make your dream home a reality
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <div className=" text-center space-y-4 flex flex-col justify-center">
                                    <img alt="#" className="" src={icon2} />
                                    <h1 className=" uppercase text-xl">New construction for commercial</h1>
                                    <span className="italic">
                                        We excel in constructing new commercial properties like restaurants, 
                                        nail salons, hair salons, and bubble tea shops. Operating across various cities, 
                                        including San Jose and the Bay Area, our fully licensed and insured team delivers customized, 
                                        standout commercial spaces. We combine modern design with practicality, ensuring your business space aligns with your vision and needs. Trust us for reliable service and expert advice, guiding your project from concept to completion.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => ChangeUrl("" , "Services")} className= "shadow-md hover:bg-[#e6b54e] group cursor-pointer hover:text-white px-4 w-[250px] py-3 border-[#e6b54e] border-2 capitalize">
                            View Services
                        </button>
                    </div>
                </div>
            </Fade>
            <div className="bg-[#fefeff] p-5 space-y-6 lg:space-y-3 lg:p-12">
                <div className=" flex text-black mt-4 flex-col justify-center text-center">
                    <h1 className="uppercase text-3xl lg:text-4xl">FEATURED WORK</h1>
                    <span className=" font-thin lg:text-xl">We Proud Of Our Work</span>
                </div>
                <div className="lg:p-4 text-white mx-auto cursor-pointer">
                    <SwiperPro />
                </div>
                <div className="flex justify-center">
                    <button onClick={() => ChangeUrl('' , 'Porfolio')} className= "hover:bg-[#e6b54e] hover:text-white group cursor-pointer px-4 w-[250px] py-3 border-[#e6b54e] border-2 capitalize">
                        View Porfolio
                    </button>
                </div>
            </div>

            <div className="p-5 lg:space-y-6 bg-[#010a8b] text-white space-y-4 lg:p-12">
                <div className="flex flex-col mt-4 justify-center text-center">
                    <h1 className="uppercase text-3xl lg:text-4xl">Customer Review</h1>
                    <span className=" font-thin lg:text-xl">Don't Just Take Our Words</span>
                </div>
                <div className="lg:p-4 mx-auto max-w-screen-xl cursor-pointer">
                    <Slide>
                        <SwiperReview />
                    </Slide>
                </div>
            </div>

            <div className="p-9 bg-[#e6b54e] text-white lg:p-12">
                <div className=" flex flex-col space-y-8 lg:space-y-12 justify-center text-center">
                    <h1 className="uppercase text-2xl lg:text-4xl">We Can Help Build Your Project !</h1>
                    <Fade delay={100} duration={300} cascade className=" font-thin text-md lg:text-2xl">TELL US ABOUT YOUR PROJECT</Fade>
                    <div className="flex justify-center">
                        <button className= "hover:bg-[#fefeff] hover:text-black group cursor-pointer px-4 w-[250px] py-3 border-[#fefeff] border-2 capitalize">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};