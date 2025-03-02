import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

export default function CardQuestion() {
  return (
    <div className='w-full bg-[#474747]/20 rounded-2xl overflow-hidden p-3 text-white'>
        <Image
            className='object-cover rounded-xl'
            src='/images/topic_demo.jpg'
            height={600}
            width={600}
            alt='Question Image'
        />
        <h1 className='text-[25px] text-center mt-3 font-bold'>Trường học (n)</h1>
        <Input
        className='mt-3 h-[50px] text-[20px]'
        placeholder='Type your answer here...'
        />
    </div>
  )
}
