import { Button } from '@heroui/button'
import { Plus } from 'lucide-react'
import React from 'react'

export default function AddCourse() {
  return (
    <Button className='w-full h-[100px] bg-[#3e18e6]/70 justify-start'>
        <div className='flex gap-5 text-white items-center '>
            <div className='w-[50px] h-[50px]'>
                <Plus width={50} height={50} color='white'/>
            </div>
            <p className='font-bold text-[15px]'>Create your new course</p>
        </div>
    </Button>
  )
}
