import { CourseContext } from '@/app/contexts/CourseContext'
import { TabContext } from '@/app/contexts/TabContext'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React, { useContext } from 'react'

export default function ContinueItem({ img, title, value, words } : {img:string, title:string, value:number, words:number}) {
  const tabContext = useContext(TabContext)
  const courseContext = useContext(CourseContext)
  return (
    <div className='flex gap-5 items-center'
    onClick={() => {
      tabContext?.setActiveTab('Courses')
      courseContext?.setCourseDetails(2)
    }}
    >
                <Image
                    src={img}
                    alt='book icon'
                    width={50}
                    height={50}
                    className='bg-[#6e6e6e] p-2 rounded-lg w-[60px] h-[60px]'
                />
                <div className='w-full'>
                    <div className='flex justify-between'>
                        <span className='font-bold text-lg'>{title}</span>
                        <span className='bg-[#3b3b3b] px-4 py-1 rounded-xl font-bold'>{words} words</span>
                    </div>
                    <div className='mt-2'>
                        <p className='text-sm text-[#9c9c9c]'>{Math.round(value)}% complete</p>
                        <Progress className='invert mt-1' value={value} max={100}/>
                    </div>
                </div>
                
    </div>
  )
}
