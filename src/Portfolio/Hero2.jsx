import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div>
      <div className='bg-slate-50'>
        <div className='flex flex-col px-12 py-20 gap-y-4'>
          <h1 className='text-3xl font-semibold'>Tech Stack</h1>
          <hr className='border-gray-300' />
        </div>

        <div className='flex justify-between ml-14 mr-14 gap-x-8 text-justify'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-16'>
            <div className='pb-16'>
              <FaHtml5 className='text-green-500 text-7xl' />
              <h2 className='font-bold text-xl py-4'>HTML&CSS</h2>
              <p className='text-gray-500'>Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
            </div>
            <div className='pb-16'>
              <FaJs className='text-green-500 text-7xl' />
              <h2 className='font-bold text-xl py-4'>JavaScript</h2>
              <p className='text-gray-500'>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.</p>
            </div>
            <div className='pb-16'>
              <FaReact className='text-green-500 text-7xl' />
              <h2 className='font-bold text-xl py-4'>React</h2>
              <p className='text-gray-500'>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2