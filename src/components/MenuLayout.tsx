import React from 'react'
import { Goal, Rocket, ScreenShare, Search, TimerResetIcon } from 'lucide-react'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Image from 'next/image'
import PricePlan from './Pricing-plan'
const menu=[
    {
        title:'POP',
        icon:<Search className='h-6 w-6'/>
    },
    {
        title:'Top Banner',
        icon:<AiOutlineSafetyCertificate className='h-6 w-6'/>
    },
    {
        title:'Hero Banner',
        icon:<Rocket className='h-6 w-6'/>
    },
    {
        title:'Plan and Pricing',
        icon:<ScreenShare className='h-6 w-6'/>
    },
    {
        title:'Size Char',
        icon:<Goal className='h-6 w-6'/>
    },
    {
        title:'Timer',
        icon:<TimerResetIcon className='h-6 w-6'/>
    },
]

function MenuLayout() {
  return (
    <div className='p-12 flex gap-4 pb-96'>
        {/* menu */}
      <div className='w-1/5'>
       {menu.map((item,i)=>(
        <button key={item.title} className={ `${i===0?'bg-white shadow-md':''}  w-full flex px-3 items-center  rounded-md py-3 gap-4 text-black  focus:bg-white focus:shadow-md`} >
           {item.icon}
           {item.title}
           <span className='ml-auto'>
            {i===0&&<FaLongArrowAltRight />}   
           </span>
        </button>

       ))}
      </div>
      <div className='relative  w-4/5 '>
        <div className='h-full w-[90%]  rounded-xl'>
           <div className='flex gap-1 bg-gray-100 p-3 w-full rounded-t-xl '> 
            <span className='bg-[#E11D48] h-2 w-2 rounded-full'></span>
            <span className='bg-[#2E7D32] h-2 w-2 rounded-full'></span>
            <span className='bg-[#22C55E] h-2 w-2 rounded-full'></span>
           </div>
            <div className='relative bg-white p-2 h-full w-full rounded-b-xl shadow-xl'>
                 <Image src='/landing.jpg' height={800} width={800} className=' rounded-md h-full w-full object-cover object-top'   alt='landing-image' />
            </div>

            {/* pricing */}
            <div className='w-[90%]  h-full absolute top-28 right-2 shadow-lg'>
            <div className='flex gap-1 bg-gray-100 p-3 w-full rounded-t-xl '> 
            <span className='bg-[#E11D48] h-2 w-2 rounded-full'></span>
            <span className='bg-[#2E7D32] h-2 w-2 rounded-full'></span>
            <span className='bg-[#22C55E] h-2 w-2 rounded-full'></span>
           </div>
            <PricePlan/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default MenuLayout
