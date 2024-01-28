import {React , useState} from "react";
import Logo1 from "../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF , faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faBarsStaggered ,faXmark , faPhone , faLocationDot} from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    const [Click , setClick] = useState(false);
    const [Scroll , SetScroll] = useState(false);
    
    const Change_color = () => {
        if(window.scrollY >= 10){
            SetScroll(true);
        }
        else{SetScroll(false);}
    };
    window.addEventListener('scroll' , Change_color)
    const Icon_Style = {fontSize: '22',};
    return (
        <div className="">
            <nav className= {Scroll?"bg-[#010a8b] flex justify-between lg:justify-around shadow-md w-full fixed top-0 left-0 right-0 z-20 ":
            "flex bg-[#010a8b] text-white justify-between lg:justify-around bg-none w-full fixed top-0 left-0 right-0 z-10 h-20"}>
                <div className="flex rounded-full items-center space-x-1 cursor-pointer group">
                    <img src={Logo1} alt="" className={!Scroll?"lg:hidden w-20":"w-28 md:w-28 group-hover:opacity-70"}/>
                </div>
                <div className={Scroll?"lg:hidden text-3xl cursor-pointer flex items-center text-black space-x-4": "lg:hidden space-x-4 blkock text-3xl cursor-pointer flex items-center text-[#3C6CA8]"}>
                    <div onClick={() => window.location.href = "tel:6696996999"} className={`${Scroll? "bg-green-400" : "border-0" }  rounded-full`}>
                        <FontAwesomeIcon className= {`${Scroll? "text-white" : "text-green-400"} flex !text-xl`} icon = {faPhone}/>
                    </div>
                    <div onClick={(e) => {e.preventDefault(); window.open("https://www.google.com/maps/dir/37.3312986,-120.4933619/1315+Piedmont+Rd,+San+Jose,+CA+95132/@37.3683678,-122.5394276,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x808fcdd1d23c37c1:0xb7232544977ba12f!2m2!1d-121.8479968!2d37.4004538?entry=ttu" , '_blank')}} className={`${Scroll? "" : "border-0" } p-2 rounded-full`}>
                        <FontAwesomeIcon className= "flex !text-xl text-sky-400" icon = {faLocationDot}/>
                    </div>
                    <div onClick={() => setClick(!Click)} className={Scroll?"lg:hidden text-3xl cursor-pointer flex items-center text-black space-x-4": "lg:hidden space-x-4 blkock text-3xl cursor-pointer flex items-center text-[#3C6CA8]"}>
                        {!Click? 
                            <FontAwesomeIcon className=" text-orange-400" icon = {faBarsStaggered}/> : 
                            <FontAwesomeIcon className=" text-orange-400" icon={faXmark} />
                        }
                    </div>
                </div>
                <div className= {Scroll? "lg:flex text-md hidden items-center space-x-12  text-xl capitalize text-white" : 
                "lg:flex text-md hidden items-center space-x-12 text-xl capitalize text-white" }>
                    <div className={Scroll? " bg-[#010a8b] py-12 p-4 hover:bg-[#131638]" : " bg-[#010a8b] py-6 hover:bg-[#131638] p-4 "}>

                        <a className="flex " href = "/">
                            Home
                        </a>
                    </div>
                    
                    <a className="flex  " href = "/Services">
                        Services
                    </a>
                    <a className="flex  " href = "/Porfolio">
                       Porfolio
                    </a>
                </div>
                <div className = {Scroll? "hidden lg:flex items-center space-x-12 text-white": "hidden lg:flex items-center space-x-12 text-white"}>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/nicespasac/">
                        <FontAwesomeIcon className="hover:text-rose-300 transition ease-in-out delay-150 duration-200" style={Icon_Style}  icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=61552561621667">
                        <FontAwesomeIcon className="hover:text-sky-300 transition ease-in-out delay-150 duration-200" style={Icon_Style} icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                    <button
                        className= {Scroll? "hover:bg-[#e6b54e] group cursor-pointer px-4 py-3 border-[#e6b54e] border-2 capitalize":
                        "hover:bg-[#e6b54e]  group cursor-pointer px-4 py-3 border-[#e6b54e] border-2 capitalize"}>
                        <a target="_blank" className = {Scroll?"group-hover:text-white tracking-wider uppercase":
                        "group-hover:text-white tracking-wider uppercase"}>Contact Us</a>
                    </button>
                </div>
            </nav>
            {Click?
                <nav className="overflow-hidden space-y-12 md:space-y-24 top-24 md:top-24 fixed p-6 w-screen h-screen bg-[#010a8b] 
                transition duration-700 ease-out lg:hidden left-0 right-0 z-20  mx-auto  text-white">
                    <div className=" space-y-16  md:space-y-24 flex flex-col text-lg mt-12">
                        <a onClick={() => setClick(!Click)} className="" href="/">Home</a>
                        <a onClick={() => setClick(!Click)} className="" href="/Services">Services</a>
                        <a onClick={() => setClick(!Click)} className=" " href="/Porfolio">Porfolio</a>
                        <button
                            className="group  transition ease-out duration-200 cursor-pointer px-4 py-3 border-[#e6b54e] border-2 capitalize tracking-wide">
                            <a className = "group-hover:text-white">Contact Us</a>
                        </button>
                    </div>
                    <div className="flex space-x-10 text-2xl justify-center">
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/nicespasac/">
                            <FontAwesomeIcon className="text-rose-300"  icon={faInstagram}></FontAwesomeIcon>
                        </a>
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=61552561621667">
                            <FontAwesomeIcon className="text-sky-300"  icon={faFacebookF}></FontAwesomeIcon>
                        </a>
                    </div>
                </nav>
                :null
            }
        </div>
    );
};

export default Navbar;