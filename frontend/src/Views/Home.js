import React from "react";
import CarouselHome from "../Components/Carousel";
import icon1 from "../img/shovel_icon.png";
import icon2 from "../img/hammer_icon.png";
import icon3 from "../img/ladder_icon.png";
import bathroom from "../img/bathroom.jpg";
import newModel from "../img/new_model.jpg";
import houseMove from "../img/house_move.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import test1 from "../img/test1.jpg";
import test2 from "../img/test2.jpg";

export default function Home(){
    return (
        <section className="relative space-y-4">
            <CarouselHome />
            <div className=" lg:p-12 p-5 space-y-4">
                <div className=" flex flex-col justify-center text-center">
                    <h1 className="uppercase text-3xl lg:text-4xl">Our Services</h1>
                    <span className=" font-thin lg:text-xl">Years of Experience</span>
                </div>
                <div className="lg:p-4 p-2 mx-auto max-w-screen-xl cursor-pointer">
                    <div className=" grid ml-0 lg:ml-6 lg:grid-cols-2 gap-6 lg:gap-12 place-items-center">
                        <div className="lg:p-8">
                            <div className=" text-center space-y-4 flex flex-col justify-center">
                                <img className="" src={icon1} />
                                <h1 className=" uppercase">New construction for resident</h1>
                                <span>Far far away, behind the word mountains, far 
                                    from the countries Vokalia and Consonantia, there live the blind texts. 
                                    Separated they live in Bookmarksgrove.
                                </span>
                            </div>
                        </div>
                        <div className="lg:p-8">
                            <div className=" text-center space-y-4 flex flex-col justify-center">
                                <img className="" src={icon2} />
                                <h1 className=" uppercase">New construction for commercial</h1>
                                <span>Far far away, behind the word mountains, far 
                                    from the countries Vokalia and Consonantia, there live the blind texts. 
                                    Separated they live in Bookmarksgrove.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className= "shadow-md hover:bg-[#e6b54e] group cursor-pointer hover:text-white px-4 w-[250px] py-3 border-[#e6b54e] border-2 capitalize">
                        View Services
                    </button>
                </div>
            </div>

            <div className="bg-[#010a8b] text-white p-5 space-y-6 lg:space-y-3 lg:p-12">
                <div className=" flex flex-col justify-center text-center">
                    <h1 className="uppercase text-3xl lg:text-4xl">FEATURED WORK</h1>
                    <span className=" font-thin lg:text-xl">We Proud Of Our Work</span>
                </div>
                <div className="lg:p-4 mx-auto max-w-screen-xl cursor-pointer">
                    <div className=" grid ml-0 lg:ml-6 lg:grid-cols-3 lg:gap-0 gap-6 lg:place-items-center">
                        <div className="lg:p-4">
                            <div className=" flex sticky lg:hidden">
                                <img className="" src={bathroom} />
                                <div className=" absolute p-1 inset-0 z-10 flex flex-col justify-end opacity-100">
                                    <div className="ml-3 text-xl">
                                        <h1>House Remodel</h1>
                                    </div>
                                    <div className=" flex ml-4 text-sm items-center space-x-1">
                                        <span className="">View Porfolio</span>
                                        <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                    </div>
                                </div>
                            </div>
                            <div className="relative lg:block hidden">
                                <img className="" src={bathroom} />
                                <div className=" absolute p-8 inset-0 z-10 bg-black flex flex-col justify-end opacity-0 hover:opacity-100 ease-linear duration-500 transition-all bg-opacity-50">
                                    <div className="ml-3 text-2xl">
                                        <h1>House Remodel</h1>
                                    </div>
                                    <div className=" flex ml-4 text-lg items-center space-x-1">
                                        <span className="">View Porfolio</span>
                                        <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:p-4">
                            <div className=" flex sticky lg:hidden">
                                <img className="" src={newModel} />
                                <div className=" absolute p-1 inset-0 z-10 flex flex-col justify-end opacity-100">
                                    <div className="ml-3 text-xl">
                                        <h1>House Remodel</h1>
                                    </div>
                                    <div className=" flex ml-4 text-sm items-center space-x-1">
                                        <span className="">View Porfolio</span>
                                        <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                    </div>
                                </div>
                            </div>
                            <div className="relative lg:block hidden">
                                <img className="" src={newModel} />
                                <div className=" absolute p-8 inset-0 z-10 bg-black flex flex-col justify-end opacity-0 hover:opacity-100 ease-linear duration-500 transition-all bg-opacity-50">
                                    <div className="ml-3 text-2xl">
                                        <h1>House Remodel</h1>
                                    </div>
                                    <div className=" flex ml-4 text-lg items-center font-thin space-x-1">
                                        <span className="">View Porfolio</span>
                                        <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:p-4">
                            <div className=" flex sticky lg:hidden">
                                <img className="" src={houseMove} />
                                <div className=" absolute p-1 inset-0 z-10 flex flex-col justify-end opacity-100">
                                    <div className="ml-3 text-xl">
                                        <h1>House Remodel</h1>
                                    </div>
                                    <div className=" flex ml-4 text-sm items-center space-x-1">
                                        <span className="">View Porfolio</span>
                                        <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                    </div>
                                </div>
                            </div>
                            <div className="relative lg:block hidden">
                                <img className="" src={houseMove} />
                                <div className=" absolute p-8 inset-0 z-10 bg-black flex flex-col justify-end opacity-0 hover:opacity-100 ease-linear duration-500 transition-all bg-opacity-50">
                                    <div className="ml-3 text-2xl">
                                        <h1>House Remodel</h1>
                                    </div>
                                    <div className=" flex ml-4 text-lg items-center font-thin space-x-1">
                                        <span className="">View Porfolio</span>
                                        <FontAwesomeIcon className=" text-sm text-gray-200" icon={faForward} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className= "hover:bg-[#e6b54e] group cursor-pointer px-4 w-[250px] py-3 border-[#e6b54e] border-2 capitalize">
                        View Porfolio
                    </button>
                </div>
            </div>

            <div className="p-5 lg:space-y-6 space-y-4 lg:p-12">
                <div className=" flex flex-col justify-center text-center">
                    <h1 className="uppercase text-3xl lg:text-4xl">Our Customer Review</h1>
                    <span className=" font-thin lg:text-xl">Don't Just Take Our Words</span>
                </div>
                <div className="lg:p-4 mx-auto max-w-screen-xl cursor-pointer">
                    <div className=" grid lg:mt-10 ml-0 lg:ml-6 lg:grid-cols-2 gap-4 lg:gap-8 lg:place-items-center">
                        <div className="shadow-md p-8 lg:p-12">
                            <div className=" flex lg:space-y-8 space-y-6 flex-col sticky items-center justify-center text-center">
                                <img src={test1} className=" w-20 lg:absolute lg:-top-24 rounded-full" />
                                <div className=" flex flex-col">
                                    <h1 className=" text-2xl">Jane Doe</h1>
                                    <span className=" font-thin lg:text-md">Home Owner</span>
                                </div>
                                <div className=" text-gray-500">
                                    <span>
                                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however 
                                        a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, 
                                        because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-md p-8 lg:p-12">
                            <div className=" flex lg:space-y-8 space-y-6 flex-col sticky items-center justify-center text-center">
                                <img src={test2} className=" w-20 lg:absolute lg:-top-24 rounded-full" />
                                <div className=" flex flex-col">
                                    <h1 className=" text-2xl">Jane Doe</h1>
                                    <span className=" font-thin lg:text-md">Home Owner</span>
                                </div>
                                <div className=" text-gray-500">
                                    <span>
                                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however 
                                        a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, 
                                        because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. 
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-9 bg-[#e6b54e] text-white lg:p-12">
                <div className=" flex flex-col space-y-8 lg:space-y-12 justify-center text-center">
                    <h1 className="uppercase text-2xl lg:text-4xl">We Can Help Build Your Project !</h1>
                    <span className=" font-thin text-md lg:text-2xl">TELL US ABOUT YOUR PROJECT</span>
                    <div className="flex justify-center">
                        <button className= "hover:bg-[#fefeff] hover:text-black group cursor-pointer px-4 w-[250px] py-3 border-[#fefeff] border-2 capitalize">
                            View Porfolio
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};