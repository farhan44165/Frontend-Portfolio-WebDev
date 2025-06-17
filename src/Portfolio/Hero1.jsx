import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import mobilepic from "../assets/mobilepic.png";


const Hero1 = () => {
  return (
    <div>
      <div className='bg-green-100 px-12 py-20 w-[100%]'>
        <div className='flex items-center w-[100%]'>
          <div className='flex flex-col gap-y-3 w-[50%]'>
            <h1 className='text-6xl font-bold'>I'm Farhan</h1>
            <h2 className='text-3xl text-gray-700 pt-1'>Front-End Developer</h2>
            <p className='text-gray-700'>Turning Ideas Into Interactive Reality</p>
            <div className='flex items-center text-gray-500 text-4xl gap-4 pt-2'>
              <FaGithubSquare className='hover:text-black transition duration-500' />
              <FaLinkedin className='hover:text-black transition duration-500' />
              <FaTwitterSquare className='hover:text-black transition duration-500' />
            </div>
          </div>

          <div className='w-[50%] hidden md:flex '>
            <img className='w-80 lg:w-[400px] ' src={mobilepic} alt="Mobile Pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero1