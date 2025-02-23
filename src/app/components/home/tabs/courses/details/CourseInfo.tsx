import WeekChart from '@/app/components/home/tabs/courses/details/WeekChart'
import Image from 'next/image'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Overall from '@/app/components/home/tabs/courses/details/Overall'
import LeadingBoard from '@/app/components/home/tabs/courses/details/LeadingBoard'

export default function CourseInfo() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
      )
    return (
        <div className='relative w-full h-[250px] rounded-xl overflow-hidden mt-2 text-white'>
            <Image
                height={300}
                width={300}
                src={'/images/course_thumbnail.png'}
                alt='Thumbnail'
                className='absolute w-full h-full object-cover'
            />
            <div className='backdrop-blur-md bg-black/40 absolute w-full h-full p-3 flex flex-col'>
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                >
                <CarouselContent>
                    <CarouselItem>
                        <Overall/>
                    </CarouselItem>
                    <CarouselItem>
                        <WeekChart/>
                    </CarouselItem>
                    <CarouselItem>
                        <LeadingBoard/>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
                
            </div>
        </div>
    )
}