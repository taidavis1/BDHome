import React, { useState,  useEffect } from "react";
import porfolio from "../Components/Data.js";
import {Gallery , Item, useGallery} from "react-photoswipe-gallery";
import { faArrowDown, faForward, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Fade} from "react-awesome-reveal";
import 'photoswipe/dist/photoswipe.css';

const GalleryContent = (props) => {
    const {open} = useGallery();
    useEffect(() => {
        open(0);
    } , [open])

    return (
        props.data.map((fname, index) => (
            <Item width="1600" height="1000" key={index} original={fname} alt="#">
                {({ref}) => (
                    <img ref={ref} className="hidden" alt="#" src={fname} />
                )}
            </Item>
        ))
    )
};

function Porfolio (){
    const importImages = (context) => {
        return context.keys().map(context);
    };
	const options = {
        zoom: false,
        tapAction:'close',
        doubleTapAction: false,
		bgOpacity:0.95,
    };
    const [data , setData] = useState([]);
	const [isClick , setIsClick] = useState(false);
	const openGalleryFolder = (folderUrl) => {
        const importedImages = importImages(folderUrl);
        setData(importedImages);
    };
	
	const onOpen = (pswpInstance) => {
		pswpInstance.on('close' , () => {
			setData([]);
		})
	}

	const handleBtn = (id) => {
        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));
    };


    return(
        <section className="lg:space-y-8 space-y-5 overflow-hidden">
            <div className="w-screen h-screen pb-12 bg-bg2 relative bg-center bg-no-repeat bg-cover lg:pb-40">
				<div className="flex bg-black items-center bg-opacity-25 h-screen w-full justify-center tracking-wide cursor-pointer text-white text-4xl lg:text-6xl italic ">
					<h2 className=" lg:mt-44 mt-28">Our Porfolio</h2>
				</div>
            </div>
			{data.length === 0? 
				(
					porfolio.map((por) => (
						<div className="space-y-3">
							<div id={por.placeName} key={por.id} className="flex justify-center text-center">
								<div onClick={() => handleBtn(por.id)} className="rounded-xl lg:hidden block bg-[#e6b54e] mx-4 cursor-pointer text-white text-xl w-full py-4">
									<div className=" flex space-x-2 justify-center text-center items-center">
										<h1 className="">{por.placeName}</h1>
										{!isClick[por.id]? 
											(<FontAwesomeIcon className="text-lg" icon={faArrowDown} />)
											:(<FontAwesomeIcon className=" text-lg" icon={faXmark} />)
										}
									</div>
								</div>
								<div className=" shadow-lg rounded-xl bg-[#e6b54e] cursor-pointer hidden lg:block text-white text-2xl w-[280px] py-4">
									<h1 className="">{por.placeName}</h1>
								</div>
							</div>
							{isClick[por.id] && (
								<Fade duration={600} delay={100}>
								<div className="text-white lg:hidden mx-2 lg:mx-auto max-w-screen-2xl p-2 cursor-pointer">
										<div className="grid ml-0 lg:ml-6 gap-4 place-items-center lg:grid-cols-3 lg:gap-6">
											{por.service.map((p) => (
												<div key={p.id} onClick={() => openGalleryFolder(p.folderUrl)} className="sticky">
													<img alt="#" className=" rounded-lg" src={p.firstImg} />
													<div className=" absolute px-4 z-10 inset-2 flex flex-col justify-end opacity-100">
														<div className=" bg-black/20 p-1 lg:p-4">
															<div className="lg:text-xl">
																<h1>{p.name}</h1>
															</div>
															<div className=" flex items-center text-sm lg:text-lg space-x-1">
																<span className=" lg:font-thin lg:text-white text-white/90">View More</span>
																<FontAwesomeIcon className=" lg:hidden block text-sm text-gray-200" icon={faForward} />
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</Fade>
							)}
							<div className="text-white hidden lg:block mx-auto max-w-screen-2xl p-2 cursor-pointer">
								<div className="grid ml-6 place-items-center grid-cols-3 gap-6">
									{por.service.map((p) => (
										<div key={p.id} onClick={() => openGalleryFolder(p.folderUrl)} 
										className="sticky hover:opacity-60 duration-200 delay-100 ease-in-out transition-all">
											<img alt="#" className=" rounded-lg" src={p.firstImg} />
											<div className=" absolute px-4 z-10 inset-2 flex flex-col justify-end opacity-100">
												<div className=" bg-black/20 p-4">
													<div className="lg:text-xl">
														<h1>{p.name}</h1>
													</div>
													<div className=" flex items-center text-lg space-x-1">
														<span className=" lg:font-thin lg:text-white text-white/90">View More</span>
														<FontAwesomeIcon className=" lg:hidden block text-sm text-gray-200" icon={faForward} />
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					))
				): (
					<div className = "overscroll-none sticky overflow-hidden">
						<Gallery onOpen={onOpen} options={options}>
							<GalleryContent data = {data}/>
						</Gallery>
					</div>
				)
			}
        </section>
    );
};
export default Porfolio;