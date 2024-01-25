import {React} from "react"
import Logo from "../img/Logo1.png";
export default function Footer(){
    return(
        <footer className="bg-white cursor-pointer">
            <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-8 lg:px-8 lg:pt-24">
                <div className="grid lg:space-x-12 grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3">
                    <div className="grid justify-items-center">
                        <div>
                            <h2 className="flex md:hidden text-3xl italic tracking-wider text-yellow-400">BD Home Groups</h2>
                            <img alt ="#" className="md:w-28 hidden md:flex" src={Logo} />
                        </div> 
                        <p className="mt-4 max-w-md tracking-wide leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however 
                            a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
                            because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
                        </p>
                
                        <ul className="mt-8 flex justify-center gap-6 md:gap-8">
                            <li className="">
                                <a href="https://www.facebook.com/profile.php?id=61552561621667" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/nicespasac/" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">About Us</p>
                            <ul className="mt-4 space-y-4 text-sm">
                                <li>
                                    <a href="/" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a  href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a  href="/Gallery" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Porfolio
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Services</p> 
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Contact Us</p>
                            <ul className="mt-3 md:space-y-2 mailto:nguyenthuyan1706@gmail.com-5 text-sm">
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <a href="mailto:nicespa.square@gmail.com" className="flex-1 text-gray-700">homegroup.@gmail.com</a>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="tel:6696996999">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <span className="flex-1 text-gray-700">6-69-699-6999</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="tel:6575356789">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <span className="flex-1 text-gray-700">657-535-6789</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
      
                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-500">
                            <span className="block sm:inline">All rights reserved.</span>
                        </p>  
        
                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; 2023 BD Home Group
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};