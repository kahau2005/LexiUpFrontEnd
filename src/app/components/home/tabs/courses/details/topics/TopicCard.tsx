import { CourseContext } from '@/app/contexts/CourseContext'
import Image from 'next/image'
import React, { useContext } from 'react'

interface items {
    name: string,
    img: string,
    total_words: number,
    words_learned: number
}
export default function TopicCard({item} : {item:items}) {
  const courseContext = useContext(CourseContext)
  return (
    <div className='bg-[#525252] p-2 rounded-xl'
        onClick={() => {courseContext?.setCourseDetails(2)}}>
        <Image
        className='rounded-2xl object-cover w-full h-[100px]'
        alt='pic demo'
        src={item.img}
        height={300}
        width={300}/>
        <p className='mt-2 text-[18px] font-bold text-[#ffffff]'>{item.name}</p>
        <div className='flex text-[10px] justify-between mt-2'>
            <span>Words: {item.total_words}</span>
            <span>Complete: {Math.round((item.words_learned/item.total_words)*100)}%</span>
        </div>
    </div>
  )
}
