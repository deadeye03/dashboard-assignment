import React from 'react'
import Link from 'next/link'
import { RxDropdownMenu } from 'react-icons/rx'
import { MdArrowDropDown } from 'react-icons/md'
import CustomeButton from './CustomeButton'
function Navbar() {
  return (
    <nav className='h-20 w-full p-1 bg-white shadow-md fixed top-0 left-0 z-10 text-black flex justify-between items-center'>
      <ul className='flex gap-12 pl-8'>       
        <Link href='#' className='font-sans font-semibold'>Nimbus </Link>
        <Link href='#' className='font-sans flex items-center'>Widget <span><MdArrowDropDown className='h-6 w-6'/> </span> </Link>
        <Link href='#' className='font-sans '>Pricing </Link>
        <Link href='#' className='font-sans '>Help center </Link>
        <Link href='#' className='font-sans '>Why us </Link>
      </ul>
      <div className='flex gap-4 pr-4'>
        <CustomeButton title='Talk to us' className='text-sm  rounded-md px-8 py-4 border border-[#A6DC94]'/>
        <CustomeButton title='start for free'className='text-sm  bg-[#3A7326] rounded-md px-8 py-4 text-white'/>
       
      </div>
    </nav>
  )
}

export default Navbar
