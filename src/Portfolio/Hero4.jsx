import React from 'react'
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import { FaGlobe } from "react-icons/fa";


const Hero4 = () => {
    return (
        <div>
            <div className='bg-slate-50 pb-20 px-12'>
                <div className='flex flex-col px-12 py-20 gap-y-4'>
                    <h1 className='text-3xl font-semibold'>Web Creations</h1>
                    <hr className='border-gray-300' />
                </div>

                <div className='flex justify-center items-center'>
                    <div className='grid gap-y-14 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 max-w-[90vw] '>
                        <div className='border rounded-xl bg-white hover:scale-110 transition duration-300 cursor-pointer shadow-md max-w-[80vw]'>
                            <img className='rounded-t-xl' src={p1} alt="Pic" />
                            <div className='px-6'>
                                <h2 className='font-semibold text-lg py-5'>First Project</h2>
                                <p>Experience Redux's power in action with this dynamic shopping cart. Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.</p>
                                <FaGlobe className='text-slate-500 text-3xl hover:text-black transition duration-500 mt-7 mb-10' />
                            </div>
                        </div>

                        <div className='border rounded-xl bg-white hover:scale-110 transition duration-300 cursor-pointer shadow-md max-w-[80vw]'>
                            <img className='rounded-t-xl' src={p2} alt="Pic" />
                            <div className='px-6'>
                                <h2 className='font-semibold text-lg py-5'>Second Project</h2>
                                <p>Explore dynamic content manipulation with this project featuring a card displaying text. Increase word count with a click, revealing more content. Easily remove the card for a streamlined user experience</p>
                                <FaGlobe className='text-slate-500 text-3xl hover:text-black transition duration-500 mt-7 mb-10' />
                            </div>
                        </div>

                        <div className='border rounded-xl bg-white hover:scale-110 transition duration-300 cursor-pointer shadow-md max-w-[80vw]'>
                            <img className='rounded-t-xl' src={p3} alt="Pic" />
                            <div className='px-6'>
                                <h2 className='font-semibold text-lg py-5'>Third Project</h2>
                                <p>Discover stunning visuals with ease using this project powered by the Unsplash API. Utilizing Axios, search for images effortlessly through a sleek search bar interface.</p>
                                <FaGlobe className='text-slate-500 text-3xl hover:text-black transition duration-500 mt-7 mb-10' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero4