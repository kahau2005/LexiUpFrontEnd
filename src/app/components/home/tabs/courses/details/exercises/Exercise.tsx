import ExerciseCard from '@/app/components/home/tabs/courses/details/exercises/ExerciseCard'
import HorizontalCardView from '@/app/components/HorizontalCardView'
import React from 'react'

export default function Exercise() {

  const data_demo = [
    {
      name: 'Exercise 1',
      img: '/images/exam_demo.jpg',
      deadline: '20/11/2024',
      isTaken: false,
      mark: 0
    },
    {
      name: 'Exercise 2',
      img: '/images/exam_demo.jpg',
      deadline: '24/3/2024',
      isTaken: true,
      mark: 9
    },
  ]

  return (
    <div>
        <h1 className='title m-0 p-2'>Exercises</h1>
        <HorizontalCardView data={data_demo} CardComponent={ExerciseCard}/>
    </div>
  )
}
