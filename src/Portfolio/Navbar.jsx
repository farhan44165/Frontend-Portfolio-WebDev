import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='sm:flex items-center bg-green-100 px-12 py-9 gap-16'>
        <div className='text-4xl font-bold'>
          <h1>Web
            <span className='text-green-700'>Dev</span>
          </h1>
        </div>

        <ul className='flex items-center gap-[5%]'>
          <a href="#">Home</a>
          <a href="#">Skills</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
