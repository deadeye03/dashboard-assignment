import React from 'react'

const companies=['Monarch' ,'Rocket','wealthFront','Secfi','Facet','turboTax','trustwill']

function Feature() {
  return (
    <div className='px-28 py-8 '>
      <h1 className='text-6xl text-black font-Roboto text-center'> Delete your Other Widgets apps you won&#39;t need them</h1>
      <div className='flex justify-center'>
      <div className='w-[630px] flex flex-wrap gap-6 mt-8 px-12 py-4 rounded-lg border-2 border-black border-opacity-45 border-dotted'>
        <div className=' h-28 w-28 rounded-[30px] bg-[#4CAF50] shadow-[6px_6px_18px_#747474,-6px_-6px_18px_#ffffff]'>      
        </div>
        {companies.map((company)=>(
            <div key={company} className=' h-28 w-28 rounded-[30px] flex justify-center items-center text-sm bg-[#E0E2DE] shadow-[6px_6px_18px_#747474,-6px_-6px_18px_#ffffff] relative'>    
            {company}  
            <span className=' absolute -top-2 left-0 pb-2 h-8 w-8 text-5xl bg-black text-white flex justify-center items-center rounded-full'>-</span>
        </div>
        ))}
      </div>

      </div>
    </div>
  )
}

export default Feature
