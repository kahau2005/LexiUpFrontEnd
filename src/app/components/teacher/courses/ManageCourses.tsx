import { Button } from '@heroui/button'
import { FolderOpen } from 'lucide-react'
import React from 'react'

export default function ManageCourses() {
  return (
    <Button className='w-full h-[100px] bg-[#18a5e6]/70 justify-start'>
        <div className='flex gap-5 text-white items-center '>
            <div className='w-[50px] h-[50px]'>
                <FolderOpen width={50} height={50} color='white'/>
            </div>
            <p className='font-bold text-[15px]'>Manage your courses</p>
        </div>
    </Button>
  )
}
