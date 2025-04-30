'use client'
import { ICourse } from '@/app/interfaces/ICourse';
import { FolderLock } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function AvailableCard(props: ICourse) {
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;

      if (textWidth > containerWidth) {
        setAnimation(`
          @keyframes scrollText {
            0% { transform: translateX(0); }
            40% { transform: translateX(-${textWidth - containerWidth}px); }
            60% { transform: translateX(-${textWidth - containerWidth}px); }
            100% { transform: translateX(0); }
          }
        `);
      }
    }
  }, []);

  return (
    <div className='relative w-full h-[200px] bg-[#9e9e9e]/20 rounded-xl overflow-hidden text-[#f7f7f7]'>
      <div className='absolute w-full h-[60%]'>
        <Image
          alt='data'
          src={props.thumbnail || '/images/course_thumbnail.png'}
          width={100}
          height={100}
          className='w-full h-full object-cover p-2 rounded-2xl'
        />
      </div>

      <div className='absolute bottom-0 w-full h-[40%] px-3 overflow-hidden'>
        <div className='flex items-center justify-between'>
            <FolderLock/>
            <div className='py-1 px-2 bg-[#ffffff]/10 font-bold rounded-md'>{props.topics.length || 0} Topics</div>
        </div>
        <div ref={containerRef} className="relative w-[100%] overflow-hidden">
          <style>{animation}</style>
          <span 
            ref={textRef} 
            className="whitespace-nowrap inline-block mt-2" 
            style={{ animation: textRef.current ? `scrollText ${textRef.current.offsetWidth / 30}s linear infinite` : 'none' }}
          >
            {props.course_name}
          </span>
        </div>
      </div>
    </div>
  );
}
