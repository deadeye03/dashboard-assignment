import React from 'react'
import CustomeButton from './CustomeButton'
import { Star } from 'lucide-react'
import { IoIosStar } from 'react-icons/io'
import Image from 'next/image'
import Promise from './Promise'
import MenuLayout from './MenuLayout'
import Feature from './Feature'

type Timage = {
    id: string,
    url: string
}
const images: Timage[] = [
    {
        id: 'image-1',
        url: ''
    },
    {
        id: 'image-3',
        url: '/pricing.jpg'
    },
    {
        id: 'image-4',
        url: '/offer.jpg'
    },
    {
        id: 'image-2',
        url: ''
    },
    {
        id: 'image-5',
        url: '/boy.jpg'
    },
    {
        id: 'image-6',
        url: '/girl.jpg'
    },
    {
        id: 'image-7',
        url: '/group.jpg'
    },
    {
        id: 'image-8',
        url: '/trend.jpg'
    },
    {
        id: 'image-6',
        url: '/music.jpg'
    },
]

function DahboardLayout() {
    return (<>
        <div className='p-16 flex gap-4'>
            {/* content layout    */}
            <div className='w-7/12 flex flex-col gap-6'>
                <h1 className='font-Roboto text-6xl font-bold text-black' >Upgrade your website</h1>
                <h2 className='text-[#4CAF50] text-5xl font-Roboto font-semibold  '>Without coding</h2>
                <p className='font-Roboto text-[#3C403A]'>
                    Step into the future with our state-of-the-art AI solutions. Unleash the potential of machine learning to innovate, optimize, and transform your business processes.
                </p>
                {/* buttons */}
                <div className='flex gap-4 pr-4'>
                    <CustomeButton title='start for free' className='text-sm  bg-[#3A7326] rounded-md px-8 py-4 text-white' />
                    <CustomeButton title='Book a demo call' className='font-Roboto text-sm text-black rounded-md px-8 py-4 border border-[#A6DC94]' />
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-1'>
                        <IoIosStar className='h-6 w-6 text-yellow-500' />
                        <IoIosStar className='h-6 w-6 text-yellow-500' />
                        <IoIosStar className='h-6 w-6 text-yellow-500' />
                        <IoIosStar className='h-6 w-6 text-yellow-500' />
                        <IoIosStar className='h-6 w-6 text-yellow-500' />
                    </div>
                    <p className='text-sm text-gray-500'>Based on <span className='font-bold'>10,000+</span> Revies</p>
                </div>
            </div>
            {/* image layout */}
            <div className='flex-1 w-6/12' >
                <div className='grid grid-cols-3 gap-4'>
                    {images.map((image, i) => (
                        <div key={image.id} className={i === 0 ? 'relative h-36 w-36 ' : i === 3 ? 'relative h-24 w-24 rounded-[30px] bg-[#E0E2DE] ' : `relative h-36 w-36 rounded-[30px] bg-[#e0e0e0] shadow-[6px_6px_18px_#747474,-6px_-6px_18px_#ffffff] rotate-6`}>
                            {i !== 0 && i !== 3 &&
                                <Image src={`${image.url}`} height={200} width={200} className='h-full w-full object-cover object-top rounded-[30px] -rotate-6' alt='image-1' />}
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
        <Promise />
        <MenuLayout/>
        <Feature/>
    </>
    )
}

export default DahboardLayout
