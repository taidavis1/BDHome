import React from "react";
import porfolio from "../Components/Data.js";
import test1 from "../img/sanjoseproject/ADU/IMG_1596_1.jpeg";
export default function Porfolio (){
    return(
        <section className=" space-y-8 overflow-hidden">
            <div className="pt-60 bg-bg2 relative bg-center bg-no-repeat bg-cover md:pb-40">
                <div className=" absolute bottom-1/4 left-1/2 tracking-wide cursor-pointer text-white text-3xl lg:text-4xl italic ">
                    <h2>Our Porfolio</h2>
                </div>
            </div>
            {porfolio.map((s) => (
                    <>  
                        <div className=" flex justify-center text-center">
                            <div id="SanJose" className=" rounded-xl bg-[#e6b54e] cursor-pointer text-white text-2xl w-[250px] py-4">
                                <h1 className="">{s.placeName}</h1>
                            </div>
                        </div>
                        <div className="text-white mx-auto p-4 cursor-pointer">
                            <div className="grid ml-0 lg:ml-6 lg:grid-cols-4 lg:gap-0 gap-6">
                                <div className="">
                                    <div className="relative lg:block hidden">
                                        <img className="" src={test1} />
                                        <div className=" absolute p-8 inset-0 z-10 flex mt-8 flex-col items-center justify-center opacity-100">
                                            <div className="text-2xl">
                                                <h1>San Jose</h1>
                                            </div>
                                            <div className=" flex text-lg space-x-1">
                                                <span className="">View Porfolio</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
        </section>
    );
};