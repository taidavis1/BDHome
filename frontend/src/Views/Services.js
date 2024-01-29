import React from "react";
import firstimg from "../img/img-services/1.png";
import secondimg from "../img/img-services/2.png";
export default function Service(){
    return (
        <section className="bg-white w-full space-y-2 lg:space-y-4">
            <div className="w-screen h-screen pb-12 bg-bgservices relative bg-center bg-no-repeat bg-cover lg:pb-40">
				<div className="flex bg-black items-center bg-opacity-50 h-screen justify-center tracking-wide cursor-pointer text-white text-4xl lg:text-6xl italic ">
					<h2 className=" lg:mt-44 mt-28">Our Services</h2>
				</div>
            </div>
            <div className="">
                <div className="grid lg:grid-cols-2 max-w-screen-xl mx-auto p-3 lg:p-8 gap-8 cursor-pointer">
                    <div className="shadow-lg lg:pb-6 pb-5 rounded-lg space-y-4 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                        <div className="lg:p-4">
                            <img src={firstimg} className="h-full lg:rounded-lg w-full" />
                        </div>
                        <div className=" flex flex-col justify-center text-center items-center">
                            <div>
                                <h1 className="text-[#010a8b] font-Catamaran text-2xl lg:text-3xl text-center">Residential Property Constuction</h1>
                            </div>
                            <div className="lg:w-3/4 lg:px-0 px-5">
                                <span className="font-Lora">
                                    Merging calming Swedish massage movements with gentle stone warmth, 
                                    this distinctive therapy genuinely elevates massage sessions to tranquil levels of unprecedented remedial efficacy. 
                                    Suitable for those experiencing stress or muscle discomfort, it offers a restorative and relaxing journey
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="hover:shadow-lg  hover:bg-[#e6b54e] hover:text-white ease-in-out delay-100 duration-150 md:text-xl 
                            text-black border-2 
                            border-[#e6b54e] text-lg py-3  group cursor-pointer px-12 md:tracking-wide">Contact Us</button>
                        </div>
                    </div>
                    <div className="shadow-lg lg:pb-6 pb-5 rounded-lg space-y-4 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                        <div className="lg:p-4">
                            <img src={secondimg} className="h-full lg:rounded-lg w-full" />
                        </div>
                        <div className=" flex flex-col justify-center text-center items-center">
                            <div>
                                <h1 className="text-[#010a8b] font-Catamaran text-2xl lg:text-3xl text-center">Commercial Property Constuction</h1>
                            </div>
                            <div className="lg:w-3/4 lg:px-0 px-5">
                                <span className="font-Lora">
                                    Merging calming Swedish massage movements with gentle stone warmth, 
                                    this distinctive therapy genuinely elevates massage sessions to tranquil levels of unprecedented remedial efficacy. 
                                    Suitable for those experiencing stress or muscle discomfort, it offers a restorative and relaxing journey
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="hover:shadow-lg  hover:bg-[#e6b54e] hover:text-white ease-in-out delay-100 duration-150 md:text-xl 
                            text-black border-2 
                            border-[#e6b54e] text-lg py-3  group cursor-pointer px-12 md:tracking-wide">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}