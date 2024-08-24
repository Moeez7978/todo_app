import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-violet-900 flex flex-row justify-between py-2 static'>
     <div className="logo font-bold text-white mx-3 cursor-pointer">DoTask</div>
    <ul className='flex flex-row gap-5 mx-4 text-white'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>Your Tasks</li>
    </ul>
    </div>
  )
}

export default Navbar
