import { Input } from '@/components/ui/input'
import React from 'react'

export default function FillBlank() {
  return (
    <div className='px-3 text-white'>
        <p className='text-[20px] '>Hello my name ___ Hau nice to meet you (to be)</p>
        <Input className='mt-5 text-[20px] h-[50px]' placeholder='Type your answer...'/>
    </div>
  )
}
