import React from 'react'

export default function Overview() {
  return (
    <div className='grid grid-cols-2 gap-4 items-center px-5 mt-3'>
        <div className='flex flex-col items-center justify-center bg-[#948979]/30 rounded-3xl'>
            <span className='text-[15px] font-bold'>Courses</span>
            <span className='font-bold text-[40px]' >24</span>
        </div>
        <div className='flex flex-col items-center justify-center bg-[#948979]/30 rounded-3xl'>
            <span className='text-[15px] font-bold'>Lessons</span>
            <span className='font-bold text-[40px]'>24</span>
        </div>
    </div>
  )
}
