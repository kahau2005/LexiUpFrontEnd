import { Button } from '@heroui/button'
import React from 'react'

export default function Tips() {
  return (
    <div className='flex items-center w-full h-fits mt-3 overflow-hidden'>
        <Button className='w-full h-[50px] flex items-center bg-[#1c61c9] rounded-[50px] justify-start mx-2'>
            <span className='font-bold text-[15px] text-[#cecece]'>Create a new account for your student.</span>
        </Button>
    </div>
  )
}
