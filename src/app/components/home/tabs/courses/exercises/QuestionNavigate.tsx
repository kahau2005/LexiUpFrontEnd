import { Button } from '@heroui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export default function QuestionNavigate() {
  return (
    <div className='w-full flex justify-between px-5 pt-5'>
        <Button className='bg-transparent border-solid border-1'>
            <ArrowLeft color='white'/>
        </Button>
        <Button className='bg-transparent border-solid border-1'>
            <ArrowRight color='white'/>
        </Button>
    </div>
  )
}
