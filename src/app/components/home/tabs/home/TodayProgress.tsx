import React from 'react'
import {CircularProgress} from "@heroui/progress";

export default function TodayProgress() {
  return (
    <div className=''>
        <h1 className='font-bold text-xl'>Today</h1>
        <div className='flex flex-col items-center gap-1'>
            <CircularProgress
                color='success'
                showValueLabel={true}
                value={70}
                maxValue={100}
                classNames={{
                    svg: "w-24 h-24 drop-shadow-md",
                    track: "stroke-white/10",
                    value: "text-xl font-semibold text-white",
                  }}
            />
            <h1 className='font-bold text-sm'>20/20 words</h1>
            <h1 className='font-bold text-2xl'>Excellent 🎉</h1>
        </div>
        <p className='text-sm text-center mt-3'>{`Well done! You've hit today's goal—keep going! 🚀🔥`}</p>
    </div>
  )
}
