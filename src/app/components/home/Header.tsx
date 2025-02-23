import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell } from 'lucide-react'
import {Badge} from '@heroui/badge'

import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center p-5'>
        <div className='flex items-center'>
            <Avatar className='w-16 h-16'>
                <AvatarImage src='/images/male.png'/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='ml-3'>
                <h1 className='font-bold text-xl'>User Demo</h1>
                <p className='text-sm'>Student</p>
            </div>
        </div>
        
        
        <Badge
            isOneChar
            color="danger"
            placement="top-right"
            shape="circle"
            size='sm'
        >
            <Bell size={30}/>
        </Badge>
            
        
    </header>
  )
}
