import React from 'react'
type Tpromise={
  data:string,
  desc:string,
}

const promises:Tpromise[]=[
   {
    data:'99.9%',
    desc:'websites support'
   },
   {
    data:'1,000+',
    desc:'hours of development invested'
   },
   {
    data:'5 min',
    desc:'to start using the widget'
   },
   {
    data:'98%',
    desc:'customer satisfaction rate'
   },
]

function Promise() {
  return (
    <div className='w-full p-10'>
        {/* our promise */}
      <div className='flex justify-between items-center'>
        {promises.map((promise)=>(
          <div key={promise.desc} className='flex flex-col gap-1'>
            <span className='text-[#4CAF50] text-4xl font-bold'>{promise.data} </span>
            <span className='font-Roboto text-[#434B51BF]'>{promise.desc} </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Promise
