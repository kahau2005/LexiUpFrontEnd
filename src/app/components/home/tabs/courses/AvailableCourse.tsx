import AvailableCard from '@/app/components/home/tabs/courses/AvailableCard';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image';
export default function AvailableCourse() {
    const courseData = [
        { title: "React Basics", thumbnail: "/images/course_thumbnail.png" },
        { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
        { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
        { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
        { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
        { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
        { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
        { title: "TypeScript for Beginners", thumbnail: "/images/course_thumbnail.png" },
        
      ];
  return (
    <div className='mt-3'>
        <h1 className='title'>Available Courses</h1>
        <div className='grid grid-cols-2 gap-4'>
            {courseData.map((item, index) => {
                return <Dialog key={index}>
                <DialogTrigger asChild>
                    <div>
                        <AvailableCard/>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] w-[80%] rounded-xl">
                    <DialogHeader>
                        <DialogTitle>OOPS!</DialogTitle>
                        <DialogDescription>
                            This course is locked
                        </DialogDescription>
                    </DialogHeader>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <Image
                        src={'/images/locked_content.webp'}
                        width={200}
                        height={200}
                        alt='locked'
                        />
                        <div className='text-[#d3d3d3]'>
                            <h3 className='font-bold text-md'>You are not a member of this course</h3>
                            <p className='text-sm mt-2'>If you believe you should be, please contact your instructor for assistance.</p>
                        </div>
                    </div>
                </DialogContent>
              </Dialog>
            })}
        </div>
    </div>
  )
}
