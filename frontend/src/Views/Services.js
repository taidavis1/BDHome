import {React , useState} from "react";

import framing from "../img/img-services/framing-house.png";

import Button from "../Components/Button.js"

export default function Service(){

    const [Click , setClick] = useState(false);

    return (
        <section className="bg-white w-full space-y-8">
            <div className="w-screen h-screen pb-12 bg-bgservices relative bg-center bg-no-repeat bg-cover lg:pb-40">
				<div className="flex bg-black items-center bg-opacity-25 h-screen w-full justify-center tracking-wide cursor-pointer text-white text-4xl lg:text-6xl italic ">
					<h2 className=" lg:mt-44 mt-28">Our Services</h2>
				</div>
            </div>
            <div className=" grid lg:grid-cols-2 max-w-screen-xl mx-auto p-4 gap-4">

                <div className="border-solid border-black border-2 p-10 py-64text-center text-xl ">

                    <img src={framing} className="" alt="logo"/>

                    <div className=" flex flex-col justify-center text-center items-center">
                            <h1 className="mt-12 mb-4 font-bold"> Residential Property Constuction</h1>

                            <h2> Merging calming Swedish massage movements with gentle stone warmth, this distinctive therapy genuinely elevates massage sessions to tranquil levels of unprecedented remedial efficacy. 
                                Suitable for those experiencing stress or muscle discomfort, it offers a restorative and relaxing journey.</h2>

                            <a onClick={() => setClick(!Click)} className=" border-solid border-2 border-black flex flex-col justify-center items-center mt-8 
                            h-16 w-48 bg-yellow-400 hover:bg-yellow-500" href="/Porfolio">Explore Options</a>
                            

                    </div>
                </div>
                <div className="border-solid border-2 border-black p-10 text-center text-xl ">
                    
                    <img src={framing} className="" alt="logo"/>

                    <div className=" flex flex-col justify-center text-center items-center">
                        <h1 className="mt-12 mb-4 font-bold"> Commercial Property Constuction</h1>

                        <h2> Merging calming Swedish massage movements with gentle stone warmth, this distinctive therapy genuinely elevates massage sessions to tranquil levels of unprecedented remedial efficacy. 
                            Suitable for those experiencing stress or muscle discomfort, it offers a restorative and relaxing journey.</h2>
                        
                        <a onClick={() => setClick(!Click)} className=" border-solid border-2 border-black flex flex-col justify-center items-center mt-8 
                         h-16 w-48 bg-yellow-400 hover:bg-yellow-500" href="/Porfolio">Explore Options</a>
                         
                    </div>
                        
                </div>
            </div>
        </section>


    )
}