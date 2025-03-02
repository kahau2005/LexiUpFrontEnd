import QuestionButton from '@/app/components/home/tabs/courses/exercises/QuestionButton'
import React from 'react'

export default function GridQuestion() {
  return (
    <div className='flex gap-4 flex-wrap'>
        <QuestionButton checked={true} title='1'/>
        <QuestionButton checked={true} title='2'/>
        <QuestionButton checked={true} title='3'/>
        <QuestionButton checked={true} title='4'/>
        <QuestionButton checked={true} title='5'/>
        <QuestionButton checked={true} title='6'/>
        <QuestionButton checked={false} title='7'/>
        <QuestionButton checked={false} title='8'/>
        <QuestionButton checked={false} title='9'/>
        <QuestionButton checked={false} title='10'/>
    </div>
  )
}
