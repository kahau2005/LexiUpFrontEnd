import AddCourse from '@/app/components/teacher/courses/AddCourse'
import MakeNotification from '@/app/components/teacher/courses/MakeNotification'
import ManageCourses from '@/app/components/teacher/courses/ManageCourses'
import React from 'react'

export default function YourCoursesView() {
  return (
    <div className='w-full h-fit px-3 mt-3'>
        <div className='w-full h-full rounded-[30px] p-5 bg-[#DFD0B8]/50 text-white flex flex-col gap-4'>
            <AddCourse/>
            <ManageCourses/>
            <MakeNotification/>
        </div>
    </div>
  )
}
