import ContinueItem from '@/app/components/home/tabs/home/ContinueItem'
import React from 'react'

export default function ContinueLearning() {
  return (
    <div className='mt-5'>
        <h1 className='title'>Continue Learning</h1>
        <div className='w-full flex flex-col gap-4'>
            <ContinueItem img='/images/book.png' title='Cambrige 10' value={40} words={123}/>
            <ContinueItem img='/images/book.png' title='Cambrige 10' value={40} words={123}/>
            <ContinueItem img='/images/book.png' title='Cambrige 10' value={40} words={123}/>
            <ContinueItem img='/images/book.png' title='Cambrige 10' value={40} words={123}/>
        </div>
    </div>
  )
}
