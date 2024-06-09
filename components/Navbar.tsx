import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-2 md:px-6 py-2 items-center z-50'>
        <div className='cursor-pointer group ml-4 md:ml-0'>
          <h2 className='text-2xl md:text-3xl font-dancingScript text-primaryAccent font-semibold hover:hidden bg-primaryBgLight group-hover:hidden duration-750'>Ashwin</h2>
          <Link href="/" ><h2 className='text-2xl md:text-3xl font-dancingScript text-primaryAccent font-semibold hidden group-hover:block duration-750'>アシュウィン</h2></Link>
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-72 text-xs md:text-[15px] md:w-96 bg-secondaryBgLight rounded-full flex justify-center items-center md:fixed absolute z-50 top-16 md:top-4 left-0 right-0 py-2 mx-auto'>
              <ul className='flex text-white justify-center items-center gap-2 '>
                  <li className='hover:bg-white hover:text-black duration-500 cursor-pointer px-2 md:px-3 rounded-full py-1'>All</li>
                  <li className='hover:bg-white hover:text-black duration-500 cursor-pointer px-2 md:px-3 rounded-full py-1'>Projects</li>
                  <li className='hover:bg-white hover:text-black duration-500 cursor-pointer px-2 md:px-3 rounded-full py-1'>Work</li>
                  <li className='hover:bg-white hover:text-black duration-500 cursor-pointer px-2 md:px-3 rounded-full py-1'>Skills</li>
                  <li className='hover:bg-white hover:text-black duration-500 cursor-pointer px-2 md:px-3 rounded-full py-1'>About</li>
              </ul>
          </div>
        </div>
        <div className='flex gap-3 mr-4 md:mr-0'>
        <Link href="/Venkata_Sai_Ashwin_Resume.pdf" target='_blank' className='hover:font-semibold font-normal duration-500'>Resume</Link>
        <Link href="/" className='hover:font-semibold font-normal duration-500'>Contact</Link>
        </div>

    </div>
  )
}

export default Navbar