import React from "react";

import framing from "../img/img-services/framing-house.png";


export default function Service(){
    return (
        <section className="bg-white border-solid border-4 border-black w-full">
            <div className=" bg-bgservices bg-center bg-cover services pt-96 relative border-solid border-2 border-black">
                
                <h1 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white p-4 text-4xl w-50 ">
                    Our services
                </h1>
            </div>
            <div className="border-solid border-red-500 bg-red-100 border-4 grid lg:grid-cols-2 max-w-screen-full mx-auto p-4" style={{height: "1800px"}}>
                <div className="border-solid border-green-500 border-4 h-96 p-10 text-center text-xl mr-5">
                    <div className="bg-bgservices h-48">
                        <h1></h1>
                    </div>
                    <h1> Residential Property Constuction</h1>

                    <h2> Merging calming Swedish massage movements with gentle stone warmth, this distinctive therapy genuinely elevates massage sessions to tranquil levels of unprecedented remedial efficacy. 
                        Suitable for those experiencing stress or muscle discomfort, it offers a restorative and relaxing journey.</h2>
                </div>
                <div className="border-solid border-4 border-blue-500 h-96 p-10 text-center text-xl ml-5">
                <h1> marcock </h1>
                <div className="border-solid border-black border-4 p-10">

                </div>
                </div>
            </div>
        </section>


    )
}