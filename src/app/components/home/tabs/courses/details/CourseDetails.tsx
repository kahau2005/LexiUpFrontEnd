import CourseInfo from '@/app/components/home/tabs/courses/details/CourseInfo'
import Practice from '@/app/components/home/tabs/courses/details/exercises/Exercise'
import Topics from '@/app/components/home/tabs/courses/details/topics/Topics'
import React from 'react'

export default function CourseDetails() {
  return (
    <div className='relative'>
        <CourseInfo/>
        <Topics/>
        <Practice/>
    </div>
  )
}
