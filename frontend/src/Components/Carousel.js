import React , {useEffect} from "react";
import {Carousel , initTE} from "tw-elements"
import Logo1 from "../img/Logo1.png";

function CarouselHome (){
    useEffect (() => {
        initTE({Carousel});
    },[]);
    
    return (
        <>
            <div id="CarouselHome" className="relative flex shadow-lg" data-te-carousel-init data-te-ride="carousel">
                <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
                    <button type="button" data-te-target="#CarouselHome" data-te-slide-to="0" data-te-carousel-active className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-te-target="#CarouselHome" data-te-slide-to="1" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 2"></button>
                    <button type="button" data-te-target="#CarouselHome" data-te-slide-to="2" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 3"></button>
                </div>
                <div className="relative w-screen overflow-hidden after:clear-both after:block after:content-['']">
                    <div className="relative float-left w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item data-te-carousel-active>
                        <div className="w-screen h-screen bg-[#010a8b] lg:bg-bg5 relative bg-center bg-no-repeat bg-cover">
                            <div className="bg-black lg:flex hidden items-center bg-opacity-25 h-screen w-screen justify-center tracking-wide text-white">
                                <div className=" !font-serif space-y-4 text-center italic ">
                                    <h2 className="text-4xl lg:text-6xl text-yellow-300 ">BD Home Group</h2>
                                    <h3 className="text-3xl lg:text-4xl ">New Construction</h3>
                                </div>
                            </div>
                            <div className="absolute flex lg:hidden flex-col justify-center top-1/4 w-full px-3 py-5 space-y-5 lg:py-8 md:space-y-6">
                                <img alt = "#" className="" src={Logo1} />
                            </div>
                        </div>
                    </div>
                    <div className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
                        <div className="w-screen h-screen bg-bg4 relative bg-center bg-no-repeat bg-cover">
                            <div className="flex !font-serif bg-black items-center bg-opacity-25 h-screen w-full justify-center tracking-wide text-white">
                                <div className=" !font-serif space-y-8 text-center italic ">
                                    <h2 className="text-3xl lg:text-6xl text-white ">Top-Rated Construction Services Firm</h2>
                                    <button
                                        className= "bg-[#e6b54e] hover:bg-gray-300/40 ease-in-out delay-150 duration-200 group cursor-pointer w-[250px] py-3 capitalize">
                                        <a href="tel:6696996999" className = "group-hover:text-white tracking-wider uppercase">Contact Us</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-fade data-te-carousel-item>
                        <div className="w-screen h-screen bg-bg3 relative bg-center bg-no-repeat bg-cover ">
                            <div className="flex !font-serif bg-black items-center bg-opacity-25 h-screen w-full justify-center tracking-wide text-white">
                                <div className=" !font-serif space-y-8 text-center italic ">
                                    <h2 className="text-3xl lg:text-6xl text-white ">Premier Building and Design Solutions</h2>
                                    <button
                                        className= "bg-[#e6b54e] hover:bg-gray-300/40 ease-in-out delay-150 duration-200 group cursor-pointer w-[250px] py-3 capitalize">
                                        <a href="/Porfolio" className = "group-hover:text-white tracking-wider uppercase">View Porfolio</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#CarouselHome" data-te-slide="prev">
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
                </button>
                <button className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-te-target="#CarouselHome" data-te-slide="next">
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
                </button>
            </div>
        </>
    );
};
export default CarouselHome;