
import CardQuestion from '@/app/components/home/tabs/courses/exercises/CardQuestion'
//import FillBlank from '@/app/components/home/tabs/courses/exercises/FillBlank'
import NavigationBar from '@/app/components/home/tabs/courses/exercises/NavigationBar'
import QuestionNavigate from '@/app/components/home/tabs/courses/exercises/QuestionNavigate'
import React from 'react'

export default function ExercisePage() {
  return (
    <div>
      <NavigationBar/>
      <div className='py-5'>
        <h1 className='title'>Question 1:</h1>
        <CardQuestion/>
        <QuestionNavigate/>
      </div>
    </div>
  )
}
