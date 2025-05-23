// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
"use client"
import { Bell } from 'lucide-react'
import {Badge} from '@heroui/badge'

import React from 'react'
import { Button } from '@heroui/button'
import NavDrawer from '@/app/components/home/NavDrawer'
import { useSelector } from 'react-redux'
//import { RootState } from '@/app/redux/store'
//import { User } from '@/app/types'


export default function Header() {
    const user = useSelector((state) => state.auth.login.currentUser)
  return (
    <header className='flex justify-between items-center px-5 py-3'>
        <NavDrawer/>
        <div className='flex items-center'>
            {/* <Avatar className='w-16 h-16'>
                <AvatarImage src='/images/male.png'/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <div className='ml-3'>
                <h1 className='font-bold text-xl'>{user?.full_name || "Userdemo"}</h1>
                <p className='text-sm text-center'>{(user?.teacher) ? "Teacher" : "Student"}</p>
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
