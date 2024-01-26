import React from "react";

import framing from "../img/img-services/framing-house.png";


export default function Service(){
    return (
        <section className="bg-white border-solid border-4 border-black w-full">
            <div className=" bg-bgservices bg-center bg-cover services pt-96 relative border-solid border-2 border-black">
                
                <h1 className="absolute top-3/4 -ml-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white p-4 text-4xl w-50 ">
                    Our services
                </h1>
            </div>
            <div className="border-solid border-red-500 bg-red-100 border-4 flex" style={{height: "1800px"}}>
                <div className="border-solid border-green-500 h-96 w-48 ">
                    <h1> box </h1>
                </div>
                <div className="border-solid border-4 ">
                <h1> marcock </h1>
                <div className="border-solid border-black border-4 ">
                    
                </div>
                </div>
            </div>
        </section>


    )
}