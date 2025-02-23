import { CourseContext } from '@/app/contexts/CourseContext'
import Image from 'next/image'
import React, { useContext } from 'react'

interface exercise {
    name: string,
    img: string,
    deadline: string,
    isTaken: boolean,
    mark: number
}

export default function ExerciseCard({item}:{item: exercise}) {
  const courseContext = useContext(CourseContext)
  return (
    <div className='bg-[#525252] p-2 rounded-xl'
        onClick={() => courseContext?.setCourseDetails(3)}
    >
            <Image
            className='rounded-2xl object-cover w-full h-[100px]'
            alt='pic demo'
            src={item.img}
            height={300}
            width={300}
            />
            <p className='mt-2 text-[18px] font-bold text-[#ffffff]'>{item.name}</p>
            <div className='text-[10px] mt-1'>
                <p>{item.isTaken ? `Score: ${item.mark}` : 'Unattempted'}</p>
                <p>Deadline: {item.deadline}</p>
            </div>
        </div>
  )
}
