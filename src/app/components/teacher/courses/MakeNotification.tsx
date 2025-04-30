import { Button } from '@heroui/button'
import { BellPlus } from 'lucide-react'
import React from 'react'

export default function MakeNotification() {
  return (
    <Button className='w-full h-[100px] bg-[#7ce618]/70 justify-start'>
        <div className='flex gap-5 text-white items-center '>
            <div className='w-[50px] h-[50px]'>
                <BellPlus width={50} height={50} color='white'/>
            </div>
            <p className='font-bold text-[15px]'>Send new notification</p>
        </div>
    </Button>
  )
}
