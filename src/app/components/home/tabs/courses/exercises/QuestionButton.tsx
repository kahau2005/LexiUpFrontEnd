import { Button } from '@heroui/button'
import React from 'react'

export default function QuestionButton({checked, title} : {checked:boolean, title: string}) {
  return (
    <Button className={`${checked ? 'bg-[#2124bd] text-[#e2e2e2]' : 'bg-[#d6d6d6] text-[#2c2c2c]'} font-bold text-[18px] w-[50px] h-[50px]`}>
        {title}
    </Button>
  )
}
