import DialogConfirm from '@/app/components/home/tabs/courses/exercises/DialogConfirm'
import DrawerQuestion from '@/app/components/home/tabs/courses/exercises/DrawerQuestion'

import React from 'react'

export default function NavigationBar() {
  return (
    <nav className='flex justify-between items-center'>
      <DrawerQuestion/>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold'>Time Left</h1>
        <p className='text-[13px]'>00:30:00</p>
      </div>
      <DialogConfirm/>
    </nav>
  )
}
