
import WordCard from '@/app/components/home/tabs/courses/learn/WordCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

export default function Learn() {
  return (
    <div className='w-full h-full'>
      <h1 className='title'>Topic name</h1>
      
      <Carousel className="w-full h-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <WordCard/>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    <div className='mt-5 flex items-center gap-2'>
      <Image
      alt='tip'
      src='/icons/idea.png'
      height={100}
      width={100}
      className='w-[30px] h-[30px]'/>
      <span className='text-[12px]'>{`Select a difficulty level (Easy, Normal, Hard) to proceed to the next word. Click the card to reveal more details, or swipe left to review the previous one.`}</span>
    </div>
    </div>
  )
}
