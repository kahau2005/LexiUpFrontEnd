import TodayProgress from '@/app/components/home/tabs/home/TodayProgress'
import React from 'react'

export default function InfoCard() {
  return (
    <section className='bg-[url(/images/card_bg.jpg)] h-fit rounded-xl bg-cover bg-center overflow-hidden text-white'>
        <div className='w-full h-full backdrop-blur-lg p-5 bg-black/30'>
            <TodayProgress/>
        </div>
    </section>
  )
}
