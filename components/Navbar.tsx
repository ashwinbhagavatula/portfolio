import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-2 md:px-6 py-2 items-center'>
        <div className='cursor-pointer group'>
          <h2 className='text-xl md:text-3xl font-dancingScript text-primaryAccent font-semibold hover:hidden bg-primaryBgLight group-hover:hidden duration-750'>Ashwin</h2>
          <h2 className='text-xl md:text-3xl font-dancingScript text-primaryAccent font-semibold hidden group-hover:block duration-750'>アシュウィン</h2>
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-72 text-xs md:text-[15px] md:w-96 bg-secondaryBgLight rounded-full flex justify-center items-center fixed top-1 md:top-4 left-0 right-0 py-2 mx-auto'>
              <ul className='flex text-white justify-center items-center gap-2'>
                  <li className='hover:bg-white hover:text-black duration-300 cursor-pointer px-2 md:px-3 rounded-full py-1'>All</li>
                  <li className='hover:bg-white hover:text-black duration-300 cursor-pointer px-2 md:px-3 rounded-full py-1'>Projects</li>
                  <li className='hover:bg-white hover:text-black duration-300 cursor-pointer px-2 md:px-3 rounded-full py-1'>Work</li>
                  <li className='hover:bg-white hover:text-black duration-300 cursor-pointer px-2 md:px-3 rounded-full py-1'>Skills</li>
                  <li className='hover:bg-white hover:text-black duration-300 cursor-pointer px-2 md:px-3 rounded-full py-1'>About</li>
              </ul>
          </div>
        </div>
        <div className='flex gap-3'>
        <Link href="/">Resume</Link>
        <Link href="/">Contact</Link>
        </div>

    </div>
  )
}

export default Navbar