import React, { useContext } from 'react';
import Image from 'next/image';
import { CourseContext } from '@/app/contexts/CourseContext';
import { TabContext } from '@/app/contexts/TabContext';

interface CourseCardProps {
  item: {
    thumbnail: string;
    title: string;
  }
}

export default function CourseCard({ item }: CourseCardProps) {
  const courseContext = useContext(CourseContext);
  const tabContext = useContext(TabContext);

  return (
    <div 
    onClick={() => {
      courseContext?.setCourseDetails(1)
      if(tabContext?.activeTab !== "Courses") tabContext?.setActiveTab("Courses")
      
    }}
      className='rounded-xl overflow-hidden relative w-[100%] h-[130px]'>
      <Image
        src={item.thumbnail}
        height={200}
        width={200}
        alt='Course Thumbnail'
        className='absolute w-full h-full object-cover'
      />
      <div className='absolute bottom-0 bg-black/50 px-2 py-2 w-full backdrop-blur-lg'>
        <h3 className='text-center font-bold text-sm text-white'>{item.title}</h3>
      </div>
    </div>
  );
}
