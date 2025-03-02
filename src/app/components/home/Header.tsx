// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell } from 'lucide-react'
import {Badge} from '@heroui/badge'

import React from 'react'
import { Button } from '@heroui/button'
import NavDrawer from '@/app/components/home/NavDrawer'


export default function Header() {
  return (
    <header className='flex justify-between items-center px-5 py-3'>
        <NavDrawer/>
        <div className='flex items-center'>
            {/* <Avatar className='w-16 h-16'>
                <AvatarImage src='/images/male.png'/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <div className='ml-3'>
                <h1 className='font-bold text-xl'>User Demo</h1>
                <p className='text-sm text-center'>Student</p>
            </div>
        </div>
        
        <Button className='bg-transparent p-2'>
            <Badge
                isOneChar
                color="danger"
                placement="top-right"
                shape="circle"
                size='sm'
            >
                <Bell size={25} color='white'/>
            </Badge>
        </Button>
        
            
        
    </header>
  )
}
