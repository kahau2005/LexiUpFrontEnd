import CourseCard from '@/app/components/home/tabs/courses/CourseCard'
import HorizontalCardView from '@/app/components/HorizontalCardView'
import React from 'react'


export default function YourCourse() {
  const courseData = [
    { title: "React Basics", thumbnail: "/images/course_thumbnail.png" },
    { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
    { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
    { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
    { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },

  ];
  return (
    <div>
        <h1 className='title'>Your Courses</h1>
        <div>
          <HorizontalCardView
            data={courseData}
            CardComponent={CourseCard}
          />
        </div>
    </div>
  )
}
