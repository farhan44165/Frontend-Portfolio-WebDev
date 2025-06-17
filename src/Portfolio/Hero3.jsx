import React from 'react'
import codeimage from "../assets/codeimage.png";

const Hero3 = () => {
    return (
        <div>
            <div className='flex justify-center'>
                <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-14 py-20 px-10 max-w-[90vw] items-center">
                    <div className='3'>
                        <img className='w-[23rem]' src={codeimage} alt="Sample Pic" />
                    </div>

                    <div className='flex flex-col gap-y-5 text-justify py-10'>
                        <h2 className='font-semibold text-3xl'>Code And Coffee</h2>
                        <hr className='text-gray-500' />
                        <p className='text-gray-500 text-justify'>I'm Farhan, a seasoned web developer with expertise in React and component-based projects. With a year of experience, I've mastered Redux for global state management and wield Axios for seamless data fetching. Let's collaborate and transform your ideas into digital brilliance!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero3